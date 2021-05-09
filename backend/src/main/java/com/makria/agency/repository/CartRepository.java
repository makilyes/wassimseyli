package com.makria.agency.repository;

import com.makria.agency.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

    @Query(
            value = "SELECT * from cart where cart.user_id = ? AND cart.status = 'A'",
            nativeQuery = true)
    List<Cart> getCartByUser(long id);

    @Transactional
    @Modifying
    @Query(
            value = "Update cart set status = 'D'  where id = ?",
            nativeQuery = true)
    void deactivateCart(long id);

    @Query(
            value = "Delete from cart where cart.id = ?",
            nativeQuery = true)
    Cart deleteProductFromCart(long id);

}
