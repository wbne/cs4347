package com.example.restservice.objects;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee_Info, Integer>{
    @Query(value = "SELECT * FROM employee_info", nativeQuery=true)
    public List<Employee_Info> findAll();

    //public List<Employee_Info> findByFnameAndLname(String firstname, String lastname);
}