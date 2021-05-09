package com.makria.agency.controller;

import com.makria.agency.dto.ContactDTO;
import com.makria.agency.entity.Cart;
import com.makria.agency.entity.Contact;
import com.makria.agency.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class ContactController {

//    final String clientUrl = "http://localhost:3000";
    final String clientUrl = "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com";

    @Autowired
    ContactService contactService;

    @PostMapping("/addContact")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> addContact(@Valid @RequestBody ContactDTO contactDto) {
        return ResponseEntity.ok(contactService.addContact(contactDto));
    }

    @GetMapping("/getContactRequests")
    @CrossOrigin(origins = clientUrl)
    public List<Contact> getContacts() {
        return contactService.getAllContacts();

    }

}
