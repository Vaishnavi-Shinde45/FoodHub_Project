package com.food.foodhub_backend.service;

import com.food.foodhub_backend.model.User;
import com.food.foodhub_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            user.setLastLoginDate(new Timestamp(System.currentTimeMillis()));
            userRepository.save(user);
            return user;
        }
        return null;
    }

    public User register(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return null; // Email already exists
        }
        user.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        user.setLastLoginDate(new Timestamp(System.currentTimeMillis()));
        return userRepository.save(user);
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}