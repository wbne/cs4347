package com.example.restservice.objects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
    @Query(value = "SELECT * FROM product", nativeQuery=true)
    public List<Product> findAll();
    
}