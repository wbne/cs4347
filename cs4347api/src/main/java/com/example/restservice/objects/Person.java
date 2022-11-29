package com.example.restservice.objects;

public abstract class Person {
    protected int age, personalID, zipcode;
    protected String firstName, lastName, city, address1, address2, state, phoneNumber;

    public Person(int age, int personalID, int zipcode, String firstName, String lastName, String city, String address1, String address2, String state, String phoneNumber) {
        this.age = age;
        this.personalID = personalID;
        this.zipcode = zipcode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address1 = address1;
        this.address2 = address2;
        this.state = state;
        this.phoneNumber = phoneNumber;
    }
    public Person() {
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

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }

    public String getName() {
        return firstName + " " + lastName;
    }

    public void setName(String first, String last) {
        setFirstName(first);
        setLastName(last);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String Fname) {
        firstName = Fname;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String Lname) {
        lastName = Lname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String add1) {
        address1 = add1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String add2) {
        address2 = add2;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}