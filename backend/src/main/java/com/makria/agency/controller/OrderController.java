package com.makria.agency.controller;


import com.makria.agency.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class OrderController {

//    final String clientUrl = "http://localhost:3000";
    final String clientUrl = "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com";

    @Autowired
    OrderService orderService;

    @GetMapping("/ordersByUserId/{userId}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> getAllOrdersByUser(@PathVariable String userId) {
        return ResponseEntity.ok(orderService.getAllOrdersByUser(userId));
    }

    @GetMapping("/ordersByAllUsers")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> getAllOrdersByAllUsers() {
        return ResponseEntity.ok(orderService.getAllOrdersByAllUsers());
    }

    @GetMapping("/allOrders")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> allOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/acceptOrder/{orderId}")
    @CrossOrigin(origins = clientUrl)
    public ResponseEntity<?> acceptOrder(@PathVariable long orderId) throws Exception {
        return ResponseEntity.ok(orderService.acceptOrder(orderId));
    }

}
