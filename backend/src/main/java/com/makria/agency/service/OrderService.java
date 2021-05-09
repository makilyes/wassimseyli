package com.makria.agency.service;

import com.makria.agency.dto.AllOrders;
import com.makria.agency.dto.ResponseMessage;
import com.makria.agency.entity.Cart;
import com.makria.agency.entity.Order;
import com.makria.agency.repository.CartRepository;
import com.makria.agency.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CartRepository cartRepository;

    public Order addNewOrder(long id,Integer price){
        List<Cart> cartList= cartRepository.getCartByUser(id);
        String description = "";
        String cartIds= "";

        for (Cart c : cartList) {
            cartIds += ",";
            cartIds += c.getId();
            description += "Project Name : " + c.getProjectName() + ", Order Type : " + c.getOrderType() + ", Package : "  + c.getPackageType() + ", Details : " +  c.getProjectDetail() + "\n";
            cartRepository.deactivateCart(c.getId());
        }

        Order order = new Order();
        order.setUserId(id);
        order.setDescription(description);
        order.setPrice(price);
        order.setStatus("Active");
        order.setCompletionDate(LocalDateTime.now());
        order.setCartIds(cartIds);


        return orderRepository.save(order);
    }

    public List<Order> getAllOrdersByUser(String id) {
        return orderRepository.findByUserId(Long.parseLong(id));
    }

    public List<Object> getAllOrdersByAllUsers() {
        return orderRepository.findAllUsersOrders();
    }

    public List<Object> getAllOrders() {
        return orderRepository.findAllOrders();
    }

    public ResponseMessage acceptOrder(long id) throws Exception {
        Optional<Order> order = orderRepository.findById(id);

        if(order.get() != null) {
            order.get().setCompletionDate(LocalDateTime.now());
            order.get().setStatus("Completed");
            orderRepository.save(order.get());

            return new ResponseMessage("Updated Successfully");

        }
        else {
            throw new Exception("Invalid Order Id");
        }
    }
}
