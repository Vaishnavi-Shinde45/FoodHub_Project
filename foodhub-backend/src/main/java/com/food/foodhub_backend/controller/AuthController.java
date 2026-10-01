package com.food.foodhub_backend.controller;

import com.food.foodhub_backend.model.User;
import com.food.foodhub_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        User user = userService.login(request.get("email"), request.get("password"));
        if (user != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("user", user);
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body(Map.of("error", "Invalid Email or Password"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        User saved = userService.register(user);
        if (saved != null) {
            return ResponseEntity.ok(Map.of("message", "Registration successful"));
        }
        return ResponseEntity.badRequest().body(Map.of("error", "Email already registered"));
    }

    // Add this inside AuthController.java:
@GetMapping("/users")
public List<User> getAllUsers() {
    return userService.getAllUsers();
}
}