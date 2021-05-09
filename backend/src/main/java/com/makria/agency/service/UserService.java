package com.makria.agency.service;

import com.makria.agency.dto.*;
import com.makria.agency.entity.User;
import com.makria.agency.repository.UserRepository;
import com.makria.agency.util.StringGenerator;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MailService mailService;


    @Autowired
    PasswordEncoder encoder;

    public List<UserDTO> getAllUser() {
        return (List<UserDTO>) userRepository.findAll()
                .stream()
                .map(user -> new UserDTO(user))
                .collect(Collectors.toList());
    }

    public ResponseMessage resetPassword(String email) throws Exception{
        User user = userRepository.findByEmail(email);

        if(user != null) {
            try {
                String temppassword = StringGenerator.getAlphaNumericString(10);
                user.setPassword(encoder.encode(temppassword));
                userRepository.save(user);

                mailService.sendMail(email,"Hello , we received a message for your reset password. We have assigned a temporary password below. Please login and update it. Thankyou\n\nPassword : " + temppassword + "","Reset Password");

                return  new ResponseMessage("Password Sent");
            }
            catch(Exception e){
                throw new Exception(e.getMessage());
            }
        }

        throw new Exception("Invalid Email");

    }



    public User getUser(long id) {
        return userRepository.findById(id).get();
    }

    public User saveUser(long id, SignupForm signUpForm) throws Exception{
        User user = getUser(id);

        User exists = userRepository.findByEmail(signUpForm.getEmail());
        if(exists != null) {
            if(exists.getEmail() != user.getUsername()){
                user.setEmail(signUpForm.getEmail());
                user.setPhone(signUpForm.getPhone());
                user.setName(signUpForm.getName());
                user.setAddress(signUpForm.getAddress());
                user.setUsername(signUpForm.getEmail());
                user.setImage(signUpForm.getImage());

                return userRepository.save(user);
            }
            else {
                throw new DuplicateKeyException("Email already in use");
            }

        }
        else {
            user.setImage(signUpForm.getImage());
            user.setEmail(signUpForm.getEmail());
            user.setPhone(signUpForm.getPhone());
            user.setName(signUpForm.getName());
            user.setAddress(signUpForm.getAddress());
            user.setUsername(signUpForm.getEmail());

            return userRepository.save(user);

        }

    }


    public User updateUserPassword(long id, PasswordForm passwordForm) throws Exception {
        User user = getUser(id);
        if (user != null) {

                user.setPassword(encoder.encode(passwordForm.getNewPassword()));
                return userRepository.save(user);
        }

        throw new Exception("Invalid Current Password");

    }



    public ResponseMessage rejectStudent(long id) throws Exception {
        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            try {

                user.get().setWaitingListStatus("Rejected");
                user.get().setCoachName(null);
                userRepository.save(user.get());


                return new ResponseMessage("User Rejected");
            } catch (Exception e) {
                throw new Exception(e.getMessage());
            }


        }

        throw new Exception("Invalid User Id");

    }

    public ResponseMessage acceptStudent(long id) throws Exception {
        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            try {

                user.get().setWaitingListStatus("Accepted");
                userRepository.save(user.get());


                return new ResponseMessage("User Accepted");
            } catch (Exception e) {
                throw new Exception(e.getMessage());
            }


        }

        throw new Exception("Invalid User Id");

    }

    public List<User> getWaitingListUsers() {
        return userRepository.getWaitingListUsers();
    }

    public List<User> getStudents() {
        return userRepository.getStudents();
    }

    public ResponseMessage assignCoach(Long id,String name) throws Exception {

        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            try {

                user.get().setCoachName(name);
                userRepository.save(user.get());


                return new ResponseMessage("Coach Added");
            } catch (Exception e) {
                throw new Exception(e.getMessage());
            }


        }

        throw new Exception("Invalid User Id");
    }


    public Integer getUsersCount() {
        return userRepository.getAllUsersCount();
    }

    public Integer getWaitingListCount() {
        return userRepository.getWaitingListCount();
    }

    public Integer getRevenue() {
        return userRepository.getTotalRevenue();
    }

    public AdminStats getStatsWithDate(String datee) {
        String date = "";

        if(datee.equals("0")) {
            date = LocalDateTime.now().toLocalDate().toString();
        }
        else if(datee.equals("7")) {
            date = LocalDateTime.now().minusDays(7).toLocalDate().toString();
        }
        else if(datee.equals("1")) {
            date = LocalDateTime.now().minusMonths(1).toLocalDate().toString();
        }
        else if(datee.contains(",")) {
            String startDate = datee.split(",")[0];
            String endDate = datee.split(",")[1];

            Integer users = userRepository.getAllUsersCountWithDates(startDate,endDate);
            Integer waitingList = userRepository.getWaitingListCountWithDates(startDate,endDate);
            Integer revenue = userRepository.getTotalRevenueWithDates(startDate,endDate);

            Integer waitingListPrev = userRepository.getWaitingListCountAll();
            Integer salesPrev = userRepository.getTotalRevenue();

            if(revenue == null) {
                revenue =0;
            }

            if(salesPrev == null) {
                salesPrev =0;
            }



            Double salesPercentage = revenue.doubleValue() / salesPrev.doubleValue() * 100;
            Double waitingListPercentage = waitingList.doubleValue() / waitingListPrev.doubleValue() * 100;

            AdminStats adminStats = new AdminStats();
            adminStats.setWaitingList(waitingList);
            adminStats.setRevenue(revenue);
            adminStats.setUsers(users);
            adminStats.setWaitingListPercentage(waitingListPercentage);
            adminStats.setSalesPercentage(salesPercentage);

            return adminStats;

        }

        Integer users = userRepository.getAllUsersCountWithDates(date,LocalDateTime.now().toLocalDate().toString());
        Integer waitingList = userRepository.getAllUsersCountWithDates(date,LocalDateTime.now().toLocalDate().toString());
        Integer revenue = userRepository.getAllUsersCountWithDates(date,LocalDateTime.now().toLocalDate().toString());

        Integer waitingListPrev = userRepository.getWaitingListCountAll();
        Integer salesPrev = userRepository.getTotalRevenue();


        if(revenue == null) {
            revenue =0;
        }

        if(salesPrev == null) {
            salesPrev =0;
        }


        Double salesPercentage = revenue.doubleValue() / salesPrev.doubleValue() * 100;
        Double waitingListPercentage = waitingList.doubleValue() / waitingListPrev.doubleValue() * 100;

        AdminStats adminStats = new AdminStats();
        adminStats.setWaitingList(waitingList);
        adminStats.setRevenue(revenue);
        adminStats.setUsers(users);
        adminStats.setWaitingListPercentage(waitingListPercentage);
        adminStats.setSalesPercentage(salesPercentage);

        return adminStats;
    }
}