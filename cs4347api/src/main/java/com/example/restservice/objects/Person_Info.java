package com.example.restservice.objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Person_Info {
    @Id
    @Column(name="Personal_ID")
    private int personalID;
    protected int age;
    protected String fname, lname;
    @Column(name="Phone_Number")
    private String phoneNumber;
    @Column(name="Email_Address")
    private String emailAddress;

    public Person_Info(int age, int personalID, int zipcode, String firstName, String lastName, String city, String address1, String address2, String state, String phoneNumber) {
        this.age = age;
        this.personalID = personalID;
        this.fname = firstName;
        this.lname = lastName;
        this.phoneNumber = phoneNumber;
    }
    public Person_Info() {
        this(-1, -1, -1, "N/A", "N/A","N/A","N/A","N/A","N/A","N/A" );
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getPersonalID() {
        return personalID;
    }

    public void setPersonalID(int personalID) {
        this.personalID = personalID;
    }

    public String getName() {
        return fname + " " + lname;
    }

    public void setName(String first, String last) {
        setFirstName(first);
        setLastName(last);
    }

    public String getFirstName() {
        return fname;
    }

    public void setFirstName(String Fname) {
        this.fname = Fname;
    }

    public String getLastName() {
        return lname;
    }

    public void setLastName(String Lname) {
        this.lname = Lname;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailAddress(){return emailAddress;}
    public void setEmailAddress(String s){emailAddress=s;}
}