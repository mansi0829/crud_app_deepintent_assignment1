package com.assignment1.crudapp.service;

import com.assignment1.crudapp.entity.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    User save(User user)throws Exception;
    Boolean update(User user) throws Exception;
    Boolean delete(UUID userId) throws Exception;
    User get(UUID userId) throws Exception;
    List<User> getAll()throws Exception;
}