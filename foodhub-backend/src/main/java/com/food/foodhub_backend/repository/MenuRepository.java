package com.food.foodhub_backend.repository;

import com.food.foodhub_backend.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Integer> {
    List<Menu> findByRestaurantID(int restaurantID);
    List<Menu> findByCategory(String category);
}