package com.food.foodhub_backend.repository;

import com.food.foodhub_backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    List<Restaurant> findByCuisineType(String cuisineType);
    List<Restaurant> findByIsActiveTrue();
}