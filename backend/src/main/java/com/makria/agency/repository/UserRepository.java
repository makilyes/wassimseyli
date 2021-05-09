package com.makria.agency.repository;


import com.makria.agency.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

//import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User findByEmail(String email);

    @Query("SELECT u.status FROM User u WHERE u.username=:username ")
    String findByStatus(@Param("username")String username);

    @Query("SELECT u.id FROM User u WHERE u.username=:username")
    long getIdByUsername(@ Param("username") String username);

    @Query(
            value = "SELECT * from users where users.waiting_list = 'true'  AND (users.waiting_list_status = 'Rejected' OR users.waiting_list_status = 'Pending')",
            nativeQuery = true)
    List<User> getWaitingListUsers();

    @Query(
            value = "SELECT * from users where users.waiting_list = 'true' AND users.waiting_list_status = 'Accepted'",
            nativeQuery = true)
    List<User> getStudents();

    @Query(
            value = "select count(users.id) from users where users.waiting_list = 'true' and (users .waiting_list_status  = 'Pending' or users .waiting_list_status  = 'Rejected')",
            nativeQuery = true)
    Integer getWaitingListCount();

    @Query(
            value = "select count(users.id) from users where users.waiting_list = 'true'",
            nativeQuery = true)
    Integer getWaitingListCountAll();

    @Query(
            value = "select count(users.id) from users",
            nativeQuery = true)
    Integer getAllUsersCount();

    @Query(
            value = "select sum(transactions.price) from transactions;",
            nativeQuery = true)
    Integer getTotalRevenue();


    @Query(
            value = "select count(users.id) from users where users.waiting_list = 'true' and DATE(users.date_updated) >= DATE(:date1) and DATE(users.date_updated) <= DATE(:date2) and  (users .waiting_list_status  = 'Pending' or users .waiting_list_status  = 'Rejected')",
            nativeQuery = true)
    Integer getWaitingListCountWithDates(String date1,String date2);

    @Query(
            value = "select count(users.id) from users where DATE(users.date_updated) >= DATE(:date1) and DATE(users.date_updated) <= DATE(:date2)",
            nativeQuery = true)
    Integer getAllUsersCountWithDates(String date1,String date2);

    @Query(
            value = "select sum(transactions.price) from transactions where DATE(transactions.time) >= DATE(:date1) and DATE(transactions.time) <= DATE(:date2)",
            nativeQuery = true)
    Integer getTotalRevenueWithDates(String date1,String date2);


}