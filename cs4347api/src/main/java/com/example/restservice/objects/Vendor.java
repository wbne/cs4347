package com.example.restservice.objects;

public class Vendor extends Person_Info {
    private int vendorID, accountNumber, creditRating;
    private String url, name;

    public Vendor(int zipcode, String name, String city, String address1, String address2, String state, String phoneNumber, int vendorID, int accountNumber, int creditRating, String url) {
        super(-1, -1, zipcode, "", "", city, address1, address2, state, phoneNumber);
        this.accountNumber = accountNumber;
        this.creditRating = creditRating;
        this.url = url;
        this.name = name;
        this.vendorID = vendorID;
    }

    public Vendor() {
        super();
        this.accountNumber = -1;
        this.creditRating = -1;
        this.url = "N/A";
        this.name = "N/A";
        this.vendorID = -1;
    }

    public int getVendorID() {
        return vendorID;
    }

    public void setVendorID(int vendorID) {
        this.vendorID = vendorID;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public int getCreditRating() {
        return creditRating;
    }

    public void setCreditRating(int creditRating) {
        this.creditRating = creditRating;
    }

    public String getURL() {
        return url;
    }

    public void setURL(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
