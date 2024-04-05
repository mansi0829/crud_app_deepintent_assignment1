package com.assignment1.crudapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.assignment1.crudapp.entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {
}
