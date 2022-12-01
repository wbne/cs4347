package com.example.restservice.objects;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee extends Person {
    @Id
    private int personalID;
    private String title;
    private ArrayList<String>  payDates;
    private int rank; 
    private ArrayList<Integer> transactionNums, amounts;

    public Employee(int age, int personalID, int zipcode, String firstName, String lastName, String city, String address1, String address2, String state, String phoneNumber, String title, int rank) {
       super(age, personalID, zipcode, firstName, lastName, city, address1, address2, state, phoneNumber);
       this.personalID = personalID;
       this.title = title;
       this.rank = rank;
       this.payDates = new ArrayList<String>();
       this.transactionNums = new ArrayList<Integer>();
       this.amounts = new ArrayList<Integer>();
    }

    public Employee() {
        super();
        this.title = "N/A";
        this.rank = -1;
        this.payDates = null;
        this.transactionNums = null;
        this.amounts = null;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList<String> getPayDate() {
        return payDates;
    }

    public void addPayDate(String date) {
        payDates.add(date);
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public ArrayList<Integer> getTransactionNum() {
        return transactionNums;
    }

    public void addTransactionNum(int transactionNum) {
        transactionNums.add(transactionNum);
    }

    public ArrayList<Integer> getAmount() {
        return amounts;
    }

    public void addAmount(int amount) {
        amounts.add(amount);
    }
}