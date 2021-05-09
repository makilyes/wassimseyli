package com.makria.agency.controller;

import com.makria.agency.dto.AdminStats;
import com.makria.agency.dto.PasswordForm;
import com.makria.agency.dto.ResponseMessage;
import com.makria.agency.dto.SignupForm;
import com.makria.agency.entity.User;
import com.makria.agency.service.UserService;
import lombok.SneakyThrows;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

public class UserController {

    @Autowired
    private UserService service;

//    final String clientUrl = "http://localhost:3000";
    final String clientUrl = "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com";

    @PostMapping("/user/updatePassword/{uid}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> updatePassword(@PathVariable("uid") Long uid, @Valid @RequestBody PasswordForm passwordForm) throws Exception {
        try
        {
            User user = service.updateUserPassword(uid,passwordForm);
            ResponseMessage responseMessage = new ResponseMessage("Password Updated");
            return new ResponseEntity<ResponseMessage>(responseMessage, HttpStatus.OK);
        }
        catch (Exception e)
        {
            ResponseMessage responseMessage = new ResponseMessage("Invalid Current Password");
            return new ResponseEntity<ResponseMessage>(responseMessage, HttpStatus.BAD_REQUEST);

        }

    }

    @PostMapping("/user/{uid}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> saveUser(@PathVariable("uid") Long uid, @Valid @RequestBody SignupForm signUpForm) throws Exception {
        try
        {
            User user = service.saveUser(uid,signUpForm);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        catch (Exception e)
        {
            ResponseMessage responseMessage = new ResponseMessage("Email already in use");
            return new ResponseEntity<ResponseMessage>(responseMessage, HttpStatus.BAD_REQUEST);

        }

    }

    @GetMapping("/getUser/{uid}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<User> getUserById(@PathVariable("uid") Long uid) {
        User user =service.getUser(uid);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


    @GetMapping("/getWaitingListUsers")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<List<User>> getWaitingListUsers() {
        return new ResponseEntity<List<User>>(service.getWaitingListUsers(), HttpStatus.OK);
    }

    @GetMapping("/acceptStudent/{id}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> acceptStudent(@PathVariable long id) throws Exception {
        return new ResponseEntity<ResponseMessage>(service.acceptStudent(id), HttpStatus.OK);
    }

    @GetMapping("/rejectStudent/{id}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> rejectStudent(@PathVariable long id) throws Exception {
        return new ResponseEntity<ResponseMessage>(service.rejectStudent(id), HttpStatus.OK);
    }

    @GetMapping("/getStudents")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> getStudents() throws Exception {
        return new ResponseEntity<List<User>>(service.getStudents(), HttpStatus.OK);
    }

    @GetMapping("/assignCoach/{id}/{coachName}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> assignCoach(@PathVariable long id,@PathVariable String coachName) throws Exception {
        return new ResponseEntity<ResponseMessage>(service.assignCoach(id,coachName), HttpStatus.OK);
    }


    @GetMapping("/getStats")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> getAdminStats() throws Exception {

        Integer users= service.getUsersCount();
        Integer waitingListCount = service.getWaitingListCount();
        Integer revenue = service.getRevenue();

        AdminStats adminStats = new AdminStats();
        adminStats.setRevenue(revenue);
        adminStats.setUsers(users);
        adminStats.setWaitingList(waitingListCount);
        adminStats.setSalesPercentage(100.0);
        adminStats.setWaitingListPercentage(100.0);
        return new ResponseEntity<AdminStats>(adminStats, HttpStatus.OK);
    }

    @GetMapping("/getStats/{datee}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> getAdminStatsWithDate(@PathVariable String datee) throws Exception {
        return new ResponseEntity<AdminStats>(service.getStatsWithDate(datee), HttpStatus.OK);
    }


}
