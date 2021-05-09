package com.makria.agency.controller;

import com.makria.agency.dto.*;
import com.makria.agency.entity.User;
import com.makria.agency.repository.UserRepository;
import com.makria.agency.security.jwt.JwtProvider;
import com.makria.agency.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.time.LocalDateTime;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthController {

//    final String clientUrl = "http://localhost:3000";
    final String clientUrl = "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com";


    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;


    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        User user = userRepository.findByEmail(loginRequest.getEmail());

        JwtResponse jwtRes = new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities(),user.getId(),user.getCoachName(),user.getName(),user.getPhone());
        return ResponseEntity.ok(jwtRes);
    }

    @PostMapping("/resetPassword")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<ResponseMessage> resetPassword(@Valid @RequestBody ResetPassword email) throws Exception {
        return new ResponseEntity<>(userService.resetPassword(email.getEmail()), HttpStatus.OK);
    }

    @GetMapping("/addAdmin")
    @CrossOrigin(origins =clientUrl)
    public ResponseEntity<?> seedAdmin() throws MessagingException {


        if (userRepository.existsByUsername("admin@portal.com")) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail("admin@portal.com")) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }

        User user = new User("Admin", "admin@portal.com", "admin@portal.com",
                encoder.encode("admin12345"));


        user.setRole("Admin");

        user.setStatus("Activated");
        userRepository.save(user);

        return new ResponseEntity<>("Admin Added", HttpStatus.BAD_REQUEST);
    }


    @PostMapping("/signup")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupForm signUpRequest)  {


        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }

        User user = new User(signUpRequest.getName(), signUpRequest.getEmail(), signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));


        user.setRole(signUpRequest.getUserType());
        user.setStatus("Active");
        user.setWaitingList(signUpRequest.getWaitingList());
        user.setWaitingListStatus("Pending");
        user.setPhone(signUpRequest.getPhone());
        user.setDateUpdated(LocalDateTime.now());



        userRepository.save(user);


        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}