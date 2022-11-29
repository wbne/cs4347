package com.example.restservice.objects;

public class Part {
    private int partID, unitPrice;
    private String name;

    public Part(int partID, int unitPrice, String name) {
        this.partID = partID;
        this.unitPrice = unitPrice;
        this.name = name;
    }

    public Part() {
        this(-1, -1, "N/A");
    }

    public int getPartID() {
        return partID;
    }

    public void setPartID(int partID) {
        this.partID = partID;
    }

    public int getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(int unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
