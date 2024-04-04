package com.assignment1.crudapp.entities;

import jakarta.persistence.Entity;

@Entity
public class Contact {
    public int getcId() {
        return cId;
    }

    public Contact(int cId, String name, String secondname, String work, String email, String phone) {
        this.cId = cId;
        this.name = name;
        this.secondname = secondname;
        this.work = work;
        this.email = email;
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "cId=" + cId +
                ", name='" + name + '\'' +
                ", secondname='" + secondname + '\'' +
                ", work='" + work + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }

    public void setcId(int cId) {
        this.cId = cId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    private int cId;
    private String name;
    private String secondname;

    private String work;
    private String email;

    private String phone;

}
