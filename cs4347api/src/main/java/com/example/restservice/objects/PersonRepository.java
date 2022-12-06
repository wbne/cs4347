package com.example.restservice.objects;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person_Info, Integer>{
    @Query(value = "SELECT * FROM person_info", nativeQuery=true)
    public List<Person_Info> findAll();

    public List<Person_Info> findByFnameAndLname(String firstname, String lastname);
}