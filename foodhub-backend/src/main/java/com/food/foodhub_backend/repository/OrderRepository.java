package com.food.foodhub_backend.repository;

import com.food.foodhub_backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    // Matches the field name 'userID' in Order.java (which maps to column 'u_id')
    List<Order> findByUserIDOrderByOrderIDDesc(int userID);
    Order findTopByUserIDOrderByOrderIDDesc(int userID);
}