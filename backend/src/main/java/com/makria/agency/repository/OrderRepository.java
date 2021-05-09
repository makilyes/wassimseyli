package com.makria.agency.repository;

import com.makria.agency.dto.AllOrders;
import com.makria.agency.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
    @Query(
            value = "SELECT * from orders where orders.user_id = ?",
            nativeQuery = true)
    List<Order> findByUserId(long id);

    @Query(
            value = "select users.id, users.name,users.address, count(users.id) ,sum(u.price ) from users inner join orders u on u.user_id  = users.id group by users.id",
            nativeQuery = true)
    List<Object> findAllUsersOrders();

    @Query(
            value = "select * ,unnest(string_to_array(cart_ids,',')) AS cartid from  orders where orders.price > 0", nativeQuery = true)
    List<Object> findAllOrders();


}
