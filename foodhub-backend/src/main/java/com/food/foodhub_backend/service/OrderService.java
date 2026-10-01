package com.food.foodhub_backend.service;

import com.food.foodhub_backend.model.Order;
import com.food.foodhub_backend.model.OrderItem;
import com.food.foodhub_backend.repository.OrderRepository;
import com.food.foodhub_backend.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order placeOrder(Order order, List<OrderItem> items) {
        order.setOrderDate(new Timestamp(System.currentTimeMillis()));
        order.setStatus("PENDING");
        Order savedOrder = orderRepository.save(order);

        if (items != null && !items.isEmpty()) {
            for (OrderItem item : items) {
                item.setOrderID(savedOrder.getOrderID());
                orderItemRepository.save(item);
            }
        }
        return savedOrder;
    }

    public List<Order> getOrdersByUser(int userID) {
        return orderRepository.findByUserIDOrderByOrderIDDesc(userID);
    }

    public Order getOrderById(int id) {
        return orderRepository.findById(id).orElse(null);
    }

    public void updateOrderStatus(int orderID, String status) {
        Order order = orderRepository.findById(orderID).orElse(null);
        if (order != null) {
            order.setStatus(status);
            orderRepository.save(order);
        }
    }
}