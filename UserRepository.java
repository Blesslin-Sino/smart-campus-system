package com.smartcampus.backend.repository;

import com.smartcampus.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Optional, but explicit
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}