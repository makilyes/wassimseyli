package com.makria.agency.controller;

import com.makria.agency.dto.PaymentRequest;
import com.makria.agency.entity.Transactions;
import com.makria.agency.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PaymentController {

//    final String clientUrl = "http://localhost:3000";
    final String clientUrl = "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com";

    @Autowired
    StripeService service;

    @PostMapping("/payment")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> completePayment(@RequestBody PaymentRequest request) throws StripeException {
        Transactions chargeId= service.charge(request);
        return chargeId!=null? new ResponseEntity<Transactions>(chargeId,HttpStatus.OK):
                new ResponseEntity<String>("Please check the credit card details entered", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/transactionsByUserId/{userId}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> transactionsByUserId(@PathVariable long userId) {
        return ResponseEntity.ok(service.getTransactionsByUserId(userId));
    }

    @GetMapping("/allTransactions")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> allTransactions() {
        return ResponseEntity.ok(service.getAllTransactions());
    }


    @ExceptionHandler
    public String handleError(StripeException ex) {
        return ex.getMessage();
    }
}
