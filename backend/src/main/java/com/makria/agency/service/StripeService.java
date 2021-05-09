package com.makria.agency.service;

import com.makria.agency.dto.PaymentRequest;
import com.makria.agency.entity.Order;
import com.makria.agency.entity.Transactions;
import com.makria.agency.repository.TransactionRepository;
import com.makria.agency.repository.UserRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StripeService {

    @Value("${STRIPE_SECRET_KEY}")
    private String secretKey;

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderService orderService;

    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }
    public Transactions charge(PaymentRequest chargeRequest) throws StripeException {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", chargeRequest.getAmount()/100);
        chargeParams.put("currency", PaymentRequest.Currency.USD);
        chargeParams.put("source", chargeRequest.getToken().getId());

        Charge charge = Charge.create(chargeParams);

        Transactions transaction = new Transactions();
        transaction.setOrderLink(charge.getReceiptUrl());
        transaction.setTransactionId(charge.getId());
        transaction.setPrice(charge.getAmount().doubleValue());
        transaction.setTime(LocalDateTime.now());

        Long userId = userRepository.findByEmail(chargeRequest.getStripeEmail()).getId();

        transaction.setUserId(userId);

        Transactions transactions =  transactionRepository.save(transaction);

        Order order = orderService.addNewOrder(userId,charge.getAmount().intValue());

        transaction.setOrderId(order.getId());

        return transactions;

    }

    public List<Transactions> getTransactionsByUserId(long id) {
        return transactionRepository.findByUserId(id);
    }
    public List<Transactions> getAllTransactions() {
        return transactionRepository.findAll();
    }
}
