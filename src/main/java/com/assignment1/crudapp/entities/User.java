package com.assignment1.crudapp.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "USER")
public class User {

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    public List<Contact> getContacts() {
        return contacts;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", contacts=" + contacts +
                ", password='" + password + '\'' +
                ", userDescription='" + userDescription + '\'' +
                '}';
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id",nullable = false)
    private int id;
    @Column(name="user_name", nullable = false)
    private String name;
    @Column(name = "user_email",unique = true,nullable = false)
    private String email;

    private List<Contact> contacts = new ArrayList<>();

    public User(int id, String name, String email, String password, String userDesciption) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userDescription = userDesciption;
    }

    public User(){
        super();
    }

    @Column(nullable = false)
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

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserDescription() {
        return userDescription;
    }

    public void setUserDescription(String userDescription) {
        this.userDescription = userDescription;
    }
    @Column(length = 500)
    private String userDescription;
}
