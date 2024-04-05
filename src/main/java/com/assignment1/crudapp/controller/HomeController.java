package com.assignment1.crudapp.controller;


import com.assignment1.crudapp.entities.User;
import com.assignment1.crudapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/test")
    @ResponseBody
    public String test(){
        System.out.println("Working");
        User user = new User();
        user.setName("Ankush Mehta");
        user.setEmail("ankushmehta1106@gmail.com");
        user.setUserDescription("Hey, This is for testing");
        user.setId(10);
        user.setPassword("testing");
        userRepository.save(user);
        return "Working";
    }
}
