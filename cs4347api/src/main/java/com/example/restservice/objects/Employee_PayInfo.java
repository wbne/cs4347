package com.example.restservice.objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Employee_PayInfo {
    @Id
    @Column(name="Employee_ID")
    int employee_ID;
    @Column(name="Pay_date")
    String pay_date;
    @Column(name="Transation_number")
    int transaction_number;
    @Column(name="Amount")
    double amount;

    public Employee_PayInfo() {
        this.employee_ID = -1;
        this.pay_date = "n/a";
        this.transaction_number = -1;
        this.amount = -1;
    }
    
    public Employee_PayInfo(int a, String b, int c, double d) {
        employee_ID = a;
        pay_date = b;
        transaction_number = c;
        amount = d;
    }

    public void setEmployee_ID(int a) {employee_ID = a;}
    public void setPayDate(String a){pay_date = a;}
    public void setTransactionNumber(int a){transaction_number = a;}
    public void setAmount(double d){amount = d;}
    public int getEmployeeID(){return employee_ID;}
    public String getPayDate(){return pay_date;}
    public int getTransactionNumber(){return transaction_number;}
    public double getAmount(){return amount;}
}
