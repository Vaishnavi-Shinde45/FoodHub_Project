package com.food.foodhub_backend.controller;

import com.food.foodhub_backend.model.Menu;
import com.food.foodhub_backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;

    @GetMapping("/restaurant/{restaurantID}")
    public List<Menu> getByRestaurant(@PathVariable int restaurantID) {
        return menuRepository.findByRestaurantID(restaurantID);
    }

    @GetMapping("/{id}")
    public Menu getById(@PathVariable int id) {
        return menuRepository.findById(id).orElse(null);
    }

    @GetMapping
    public List<Menu> getAll() {
        return menuRepository.findAll();
    }

    @PostMapping
    public Menu add(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        menuRepository.deleteById(id);
    }
}