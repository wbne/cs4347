package com.example.restservice.objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Department {
    @Id
    @Column(name="Department_ID")
    int depID;
    @Column(name="Dname")
    private String name;
    @Column(name="Dmgr_Ssn")
    private int managerSsn;

    public Department(int departmentID, String name, int mgrSsn) {
        this.managerSsn = mgrSsn;
        this.depID = departmentID;
        this.name = name;
    }

    public Department() {
        this(-1, "N/A", -1);
    }

    public int getDepartmentID() {
        return depID;
    }

    public void setDepartmentID(int departmentID) {
        this.depID = departmentID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMgr(){
        return managerSsn;
    }

    public void setMgrSsn(int a){managerSsn = a;}
    
}
