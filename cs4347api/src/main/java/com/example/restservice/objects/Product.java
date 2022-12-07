package com.example.restservice.objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
    @Id
    @Column(name="Product_ID")
    private int productID;
    @Column(name="Product_Name")
    private String name;
    @Column(name="Style")
    private String style;
    @Column(name="Product_type")
    private String productType;
    @Column(name="List_price")
    private double price;
    @Column(name="Size")
    private double size;
    @Column(name="Weight")
    private double weight;
    @Column(name="Department_ID")
    private String deptID;
    
    public Product(String name, String style, String productType, double price, double size, double weight, int productID, String deptID) {
        this.name = name;
        this.style = style;
        this.productType = productType;
        this.price = price;
        this.size = size;
        this.weight = weight;
        this.productID = productID;
        this.deptID = deptID;
    }
    
    public Product() {
        this("n/a", "n/a", "n/a", -1, -1, -1, -1, "n/a");
    }

    public void setProductID(int a) {this.productID = a;}
    public int getProductID() {return productID;}
    public void setDeptID(String a) {this.deptID = a;}
    public String getDeptID() {return deptID;}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getSize() {
        return size;
    }

    public void setSize(double size) {
        this.size = size;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
}
