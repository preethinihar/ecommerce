package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private UserRepository repo;

    @GetMapping
    public User getProfile(Authentication auth) {
        return repo.findByUsername(auth.getName()).orElse(null);
    }

    @PutMapping
    public User updateProfile(@RequestBody User updatedUser, Authentication auth) {
        User user = repo.findByUsername(auth.getName()).orElse(null);

        if (user != null) {
            user.setEmail(updatedUser.getEmail());
            return repo.save(user);
        }
        return null;
    }
}