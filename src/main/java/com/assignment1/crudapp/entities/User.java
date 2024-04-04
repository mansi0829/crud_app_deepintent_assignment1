package com.assignment1.crudapp.entities;

import jakarta.persistence.Entity;

@Entity
public class User {
    private int id;
    private String name;
    private String email;

    public User(int id, String name, String email, String password, String userDesciption) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userDescription = userDesciption;
    }

    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", userDescription='" + userDescription + '\'' +
                '}';
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserDescription() {
        return userDescription;
    }

    public void setUserDescription(String userDescription) {
        this.userDescription = userDescription;
    }

    private String userDescription;
}
