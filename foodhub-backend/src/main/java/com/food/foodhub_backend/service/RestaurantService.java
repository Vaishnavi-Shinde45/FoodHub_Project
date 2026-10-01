package com.food.foodhub_backend.service;

import com.food.foodhub_backend.model.Restaurant;
import com.food.foodhub_backend.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant getById(int id) {
        return restaurantRepository.findById(id).orElse(null);
    }

    public List<Restaurant> getByCuisine(String cuisine) {
        return restaurantRepository.findByCuisineType(cuisine);
    }

    public Restaurant addRestaurant(Restaurant r) {
        return restaurantRepository.save(r);
    }

    public void deleteRestaurant(int id) {
        restaurantRepository.deleteById(id);
    }
}