package com.example.restservice.identifiers;

public class PartType {
    private int partTypeID;
    private String name;

    public PartType(int partTypeID, String name) {
        this.partTypeID = partTypeID;
        this.name = name;
    }
    
    public int returnPartTypeID() {
        return partTypeID;
    }

    public void setPartTypeID(int partTypeID) {
        this.partTypeID = partTypeID;
    }

    public String returnName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
