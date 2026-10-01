package com.food.foodhub_backend.controller;

import com.food.foodhub_backend.model.Order;
import com.food.foodhub_backend.model.OrderItem;
import com.food.foodhub_backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // Get all orders (for testing or admin dashboard)
    @GetMapping
    public List<Order> getAll() {
        return orderService.getAllOrders();
    }

    // Get orders by customer ID
    @GetMapping("/user/{userID}")
    public List<Order> getByUser(@PathVariable int userID) {
        return orderService.getOrdersByUser(userID);
    }

    // Get specific order by ID
    @GetMapping("/{id}")
    public Order getById(@PathVariable int id) {
        return orderService.getOrderById(id);
    }

    // Place new order
    @PostMapping
    public ResponseEntity<?> placeOrder(@RequestBody Map<String, Object> request) {
        try {
            Order order = new Order();
            order.setUserID(Integer.parseInt(request.get("userID").toString()));
            order.setRestaurantID(Integer.parseInt(request.get("restaurantID").toString()));
            order.setTotalAmount(Double.parseDouble(request.get("totalAmount").toString()));
            order.setPaymentMethod((String) request.get("paymentMethod"));

            List<OrderItem> orderItems = new ArrayList<>();
            if (request.containsKey("items") && request.get("items") != null) {
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> items = (List<Map<String, Object>>) request.get("items");

                for (Map<String, Object> item : items) {
                    OrderItem oi = new OrderItem();
                    oi.setMenuID(Integer.parseInt(item.get("menuID").toString()));
                    oi.setQuantity(Integer.parseInt(item.get("quantity").toString()));
                    oi.setItemTotal(Double.parseDouble(item.get("itemTotal").toString()));
                    orderItems.add(oi);
                }
            }

            Order saved = orderService.placeOrder(order, orderItems);
            return ResponseEntity.ok(Map.of(
                "message", "Order placed successfully", 
                "orderID", saved.getOrderID()
            ));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Update order status (Admin / Delivery)
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable int id, @RequestBody Map<String, String> request) {
        orderService.updateOrderStatus(id, request.get("status"));
        return ResponseEntity.ok(Map.of("message", "Status updated successfully"));
    }
}