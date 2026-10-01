package com.food.foodhub_backend.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "ordertable") // Exact lowercase table name from your MySQL Workbench
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderID")
    private int orderID;

    @Column(name = "u_id") // In your MySQL Workbench, the column is named 'u_id'
    private Integer userID;

    @Column(name = "RestaurantID")
    private Integer restaurantID;

    @Column(name = "OrderDate")
    private Timestamp orderDate;

    @Column(name = "TotalAmount")
    private Double totalAmount; // Wrapper Double so nulls/decimals won't crash

    @Column(name = "Status")
    private String status;

    @Column(name = "PaymentMethod")
    private String paymentMethod;

    // --- Getters and Setters ---
    public int getOrderID() { return orderID; }
    public void setOrderID(int orderID) { this.orderID = orderID; }

    public Integer getUserID() { return userID; }
    public void setUserID(Integer userID) { this.userID = userID; }

    public Integer getRestaurantID() { return restaurantID; }
    public void setRestaurantID(Integer restaurantID) { this.restaurantID = restaurantID; }

    public Timestamp getOrderDate() { return orderDate; }
    public void setOrderDate(Timestamp orderDate) { this.orderDate = orderDate; }

    public Double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(Double totalAmount) { this.totalAmount = totalAmount; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }
}