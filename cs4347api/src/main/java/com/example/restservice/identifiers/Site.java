package com.example.restservice.identifiers;

public class Site {
    private int siteID;
    private String name, location;

    public Site(int siteID, String name, String location) {
        this.siteID = siteID;
        this.name = name;
        this.location = location;
    }

    public Site() {
        this(-1, "N/A", "N/A");
    }

    public int getSiteID() {
        return siteID;
    }

    public void setSiteID(int siteID) {
        this.siteID = siteID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
