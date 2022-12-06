package com.example.restservice.objects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer>{
    @Query(value = "SELECT * FROM department", nativeQuery=true)
    public List<Department> findAll();
    
}
