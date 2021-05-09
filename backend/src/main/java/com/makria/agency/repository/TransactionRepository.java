package com.makria.agency.repository;

import com.makria.agency.entity.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions,Long> {

    @Query(
            value = "SELECT * from transactions where transactions.user_id = ?",
            nativeQuery = true)
    List<Transactions> findByUserId(long id);
}
