package com.makria.agency.service;

import com.makria.agency.dto.ContactDTO;
import com.makria.agency.dto.ResponseMessage;
import com.makria.agency.entity.Contact;
import com.makria.agency.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    ContactRepository contactRepository;


    public ResponseMessage addContact(ContactDTO contactDTO)
    {
        Contact contact= new Contact();
        contact.setEmail(contactDTO.getEmail());
        contact.setMessage(contactDTO.getMessage());
        contact.setName(contactDTO.getName());
        contact.setType(contactDTO.getType());
        contactRepository.save(contact);

        ResponseMessage responseMessage= new ResponseMessage("Contact Created");
        return responseMessage;
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
}
