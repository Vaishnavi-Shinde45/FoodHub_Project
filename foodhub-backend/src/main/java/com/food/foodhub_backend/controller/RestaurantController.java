package com.food.foodhub_backend.controller;

import com.food.foodhub_backend.model.Restaurant;
import com.food.foodhub_backend.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping
    public List<Restaurant> getAll() {
        return restaurantService.getAllRestaurants();
    }

    @GetMapping("/{id}")
    public Restaurant getById(@PathVariable int id) {
        return restaurantService.getById(id);
    }

    @GetMapping("/cuisine/{type}")
    public List<Restaurant> getByCuisine(@PathVariable String type) {
        return restaurantService.getByCuisine(type);
    }

    @PostMapping
    public Restaurant add(@RequestBody Restaurant r) {
        return restaurantService.addRestaurant(r);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        restaurantService.deleteRestaurant(id);
    }
}