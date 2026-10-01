package com.food.foodhub_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RestaurantID")
    private int restaurantID;

    @Column(name = "name")
    private String name;

    @Column(name = "CuisineType")
    private String cuisineType;

    @Column(name = "DeliveryTime")
    private Integer deliveryTime; // Uses Integer wrapper so null won't crash

    @Column(name = "address")
    private String address;

    @Column(name = "AdminUserID")
    private Integer adminUserID; // Uses Integer wrapper

    @Column(name = "rating")
    private Double rating; // Uses Double wrapper

    @Column(name = "IsActive")
    private Boolean isActive; // Uses Boolean wrapper

    @Column(name = "imagePath")
    private String imagePath;

    // --- Getters and Setters ---
    public int getRestaurantID() { return restaurantID; }
    public void setRestaurantID(int restaurantID) { this.restaurantID = restaurantID; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCuisineType() { return cuisineType; }
    public void setCuisineType(String cuisineType) { this.cuisineType = cuisineType; }

    public Integer getDeliveryTime() { return deliveryTime; }
    public void setDeliveryTime(Integer deliveryTime) { this.deliveryTime = deliveryTime; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public Integer getAdminUserID() { return adminUserID; }
    public void setAdminUserID(Integer adminUserID) { this.adminUserID = adminUserID; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }
}