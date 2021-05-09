package com.makria.agency.controller;

import com.makria.agency.dto.CartDTO;
import com.makria.agency.dto.ResponseMessage;
import com.makria.agency.entity.Cart;
import com.makria.agency.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CartController {
//    final String clientUrl = "http://localhost:3000";
    final String clientUrl = "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com";


    @Autowired
    CartService cartService;

    @PostMapping("/addToCart")
    @CrossOrigin(origins = clientUrl)
    public Cart addtoCart(@Valid @RequestBody CartDTO cartDTO) {
        return cartService.addToCart(cartDTO);

    }

    @GetMapping("/getCartByUser/{userId}")
    @CrossOrigin(origins = clientUrl)
    public List<Cart> getCartByUser(@PathVariable Long userId) {
        return cartService.getCartByUser(userId);

    }

    @GetMapping("/getCartById/{cartId}")
    @CrossOrigin(origins = clientUrl)
    public Cart getCartById(@PathVariable Long cartId) {
        return cartService.getCartById(cartId);

    }

    @DeleteMapping("/deleteCartProduct/{cartProductId}")
    @CrossOrigin(origins = clientUrl)
    public ResponseMessage deleteFromCart(@PathVariable Long cartProductId) throws Exception {
        return cartService.deleteCartProduct(cartProductId);

    }


}
