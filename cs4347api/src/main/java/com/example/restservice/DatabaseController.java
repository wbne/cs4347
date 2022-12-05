package com.example.restservice;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.restservice.objects.Employee;
import com.example.restservice.objects.EmployeeRepository;

@RestController
@RequestMapping("/get")
public class DatabaseController {
    private static final String template = "Hello %s";
    private AtomicInteger counter = new AtomicInteger();

    @Autowired
    EmployeeRepository employeeRepository;
    
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
}
