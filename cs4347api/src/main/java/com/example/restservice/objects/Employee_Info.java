package com.example.restservice.objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Employee_Info")
public class Employee_Info {
    @Id
    @Column(name = "Employee_ID")
    private int employee_ID;
    /* 
    private int personalID;
    private String title;
    private ArrayList<String>  payDates;
    private String rank; 
    private ArrayList<Integer> transactionNums, amounts;
    */
    //String  lname;
    @Column(name = "Employee_Rank")
    private String employee_Rank;
    @Column(name = "Department_ID")
    String department_ID;
    @Column(name = "Site_ID")
    String site_ID;
    String supervisor_ID;

    /* 
    public Employee_Info(int age, int personalID, int zipcode, String firstName, String lastName, String city, String address1, String address2, String state, String phoneNumber, String title, String rank) {
       super(age, personalID, zipcode, firstName, lastName, city, address1, address2, state, phoneNumber);
       this.personalID = personalID;
       this.title = title;
       this.rank = rank;
       this.payDates = new ArrayList<String>();
       this.transactionNums = new ArrayList<Integer>();
       this.amounts = new ArrayList<Integer>();
       fname = firstName;
       lname = lastName;
       employee_Rank = rank;
    }
    */

    public Employee_Info(int employee_ID, String employee_Rank, String department_ID, String site_ID, String supervisor_ID) {
        System.out.println("filled");
        this.employee_ID = employee_ID;
        this.employee_Rank = employee_Rank;
        this.department_ID = department_ID;
        this.site_ID = site_ID;
        this.supervisor_ID = supervisor_ID;
        //this.fname = fname;
        //this.lname = lname;
    }

    public Employee_Info() {
        System.out.println("blanks");
        //employee_ID = -1;
        //employee_Rank = "N/A";
        //department_ID = "N/a";
        //site_ID = "n/a";
        //supervisor_ID = "n/a";
        //fname = "";
        //lname = "";
    }

    public void setEmployee_ID(int i) {System.out.println("fuck");employee_ID = i;}
    //public void setFname(String s) {fname = s;}
    //public void setLname(String s) {lname = s;}
    public void setEmployee_Rank(String s) {System.out.println("fuck2");employee_Rank = s;}
    public void setDepartment_ID(String s) {department_ID = s;}
    public void setSite_ID(String s) {site_ID = s;}
    public void setSupervisor_ID(String s) {supervisor_ID = s;}

    public int getEmployee_ID() {System.out.println(employee_Rank + department_ID + site_ID + supervisor_ID);return employee_ID;}

    //public String getFname() {return fname;}
    //public String getLname() {return lname;}
    public String getEmployee_Rank() {return employee_Rank;}
    public String getDepartment_ID() {return department_ID;}
    public String getSite_ID() {return site_ID;}
    public String getSupervisor_ID() {return supervisor_ID;}

    /*
    public Employee_Info() {
        super();
        this.title = "N/A";
        this.rank = "";
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

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
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
    */
}