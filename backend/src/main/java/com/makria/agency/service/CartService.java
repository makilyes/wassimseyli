package com.makria.agency.service;

import com.makria.agency.dto.CartDTO;
import com.makria.agency.dto.ResponseMessage;
import com.makria.agency.entity.Cart;
import com.makria.agency.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {


    @Autowired
    CartRepository cartRepository;

    public List<Cart> getCartByUser(long id) {
        return cartRepository.getCartByUser(id);
    }

    public ResponseMessage deleteCartProduct(long id) throws Exception {
        try {
            cartRepository.deleteById(id);
            return new ResponseMessage("Deleted");
        }
        catch(Exception e) {
            throw new Exception("Id does not exist");
        }

    }


    public Cart addToCart(CartDTO cartDTO){
        Cart cart = new Cart();
        Integer price =0;
        if(cartDTO.getOrderType().equals("Website")) {

            if(cartDTO.getWebsiteType().equals("withCMS")) {
                cart.setWebsiteType(cartDTO.getWebsiteType());
                if(cartDTO.getPackageType().equals("Shopify")){
                 price += 349;
                }
                else if(cartDTO.getPackageType().equals("WordPress")){
                    if(cartDTO.isUseWordpress()){
                        price += 79;
                        cart.setUseWordpress(true);
                    }
                    else {
                        cart.setUseWordpress(false);
                    }
                    price += 349;
                    cart.setPages(cartDTO.getPages());
                }
                cart.setProjectDetail(cartDTO.getProjectDetail());
                cart.setProjectName(cartDTO.getProjectName());
                cart.setProducts(cartDTO.getProducts());
                cart.setURL(cartDTO.getURL());
                cart.setFile(cartDTO.getFile());
            }
            else {
                cart.setWebsiteType(cartDTO.getWebsiteType());
                if(cartDTO.getPackageType().equals("Small Business")){
                    price += 1200;
                }
                else if(cartDTO.getPackageType().equals("Medium Business")){
                    price += 2000;
                }
                else if(cartDTO.getPackageType().equals("Large Business")){
                    price += 4000;
                }
                else if(cartDTO.getPackageType().equals("Enterprise")){
                    price += 0;
                }
                cart.setProjectDetail(cartDTO.getProjectDetail());
                cart.setProjectName(cartDTO.getProjectName());
                cart.setURL(cartDTO.getURL());
                cart.setFile(cartDTO.getFile());
            }
        }
        else  if(cartDTO.getOrderType().equals("Consulting")) {
            if(cartDTO.getPackageType().equals("1 hour")){
                price += 1200;
            }
            else if(cartDTO.getPackageType().equals("2 hours")){
                price += 2000;
            }
            else if(cartDTO.getPackageType().equals("4 hours")){
                price += 4000;
            }
            else if(cartDTO.getPackageType().equals("24 hours")){
                price += 4000;
            }
            cart.setProjectDetail(cartDTO.getProjectDetail());
            cart.setProjectName(cartDTO.getProjectName());
            cart.setURL(cartDTO.getURL());
            cart.setFile(cartDTO.getFile());
        }
        else  if(cartDTO.getOrderType().equals("Branding")) {

            if (cartDTO.getTypeOfBranding().equals("Products photo shooting")) {

                if (cartDTO.getPackageType().equals("1 photo")) {
                    price += 1200;
                } else if (cartDTO.getPackageType().equals("3 photo")) {
                    price += 2000;
                } else if (cartDTO.getPackageType().equals("5 photo")) {
                    price += 4000;
                }
            } else if (cartDTO.getTypeOfBranding().equals("Packaging design with logo")) {

                if (cartDTO.getPackageType().equals("Product Packaging")) {
                    price += 1200;
                } else if (cartDTO.getPackageType().equals("Box packaging")) {
                    price += 2000;
                } else if (cartDTO.getPackageType().equals("Cosmetic packaging")) {
                    price += 4000;
                } else if (cartDTO.getPackageType().equals("Stickers")) {
                    price += 4000;
                }
            } else if (cartDTO.getTypeOfBranding().equals("Ads Management")) {

                if (cartDTO.getPackageType().equals("Up to $3,000")) {
                    price += 350;
                } else if (cartDTO.getPackageType().equals("$3,001 - $5,000")) {

                    price += 500;
                } else if (cartDTO.getPackageType().equals("$5,001 - $10,000")) {
                    price += 700;
                } else if (cartDTO.getPackageType().equals("$10,001 and more")) {
                    price += 1200;
                }
            }

        }
                cart.setOrderType(cartDTO.getOrderType());
                cart.setProjectDetail(cartDTO.getProjectDetail());
                cart.setProjectName(cartDTO.getProjectName());
                cart.setURL(cartDTO.getURL());
                cart.setFile(cartDTO.getFile());
                cart.setPrice(price);
                cart.setTypeOfBranding(cartDTO.getTypeOfBranding());
                cart.setUserId(cartDTO.getUserId());
                cart.setPackageType(cartDTO.getPackageType());
                cart.setStatus("A");

            return cartRepository.save(cart);


    }

    public Cart getCartById(long id) {
        return cartRepository.findById(id).get();
    }
}
