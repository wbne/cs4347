package com.example.restservice.identifiers;

public class Department {
    private String departmentID, name;

    public Department(String departmentID, String name) {
        this.departmentID = departmentID;
        this.name = name;
    }

    public Department() {
        this("N/A", "N/A");
    }

    public String getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(String departmentID) {
        this.departmentID = departmentID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
