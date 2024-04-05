package com.assignment1.crudapp.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "CONTACT")
public class Contact {
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne
    private User user;

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

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "contact_id",nullable = false)
    private int cId;

//    @Column(name="contact_first_name", nullable = false)

    private String name;
//    @Column(name = "contact_second_name",nullable = false)
    private String secondname;

    @Override
    public String toString() {
        return "Contact{" +
                "cId=" + cId +
                ", name='" + name + '\'' +
                ", secondname='" + secondname + '\'' +
                ", work='" + work + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", aboutuser='" + aboutuser + '\'' +
                '}';
    }

    public String getAboutuser() {
        return aboutuser;
    }

    public Contact(){
        super();
    }

    public void setAboutuser(String aboutuser) {
        this.aboutuser = aboutuser;
    }

    private String work;

//    @Column(name = "contact_email",unique = true,nullable = false)
    private String email;
//    @Column(name = "contact_phoneNo",unique = true,nullable = false)

    private String phone;
    @Column(length = 500)
    private String aboutuser;
}
