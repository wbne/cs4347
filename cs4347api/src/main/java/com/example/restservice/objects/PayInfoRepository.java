package com.example.restservice.objects;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PayInfoRepository extends JpaRepository<Employee_PayInfo, Integer>{
    @Query(value = "SELECT * FROM employee_payinfo", nativeQuery=true)
    public List<Employee_PayInfo> findAll();
}
    
