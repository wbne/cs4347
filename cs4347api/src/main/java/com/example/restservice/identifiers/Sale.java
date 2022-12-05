package com.example.restservice.identifiers;

public class Sale {
    private String saleTime;

    public Sale(String saleTime) {
        this.saleTime = saleTime;
    }

    public String getSaleTime() {
        return saleTime;
    }

    public void setSaleTime(String newSale) {
        this.saleTime = newSale;
    }
}
