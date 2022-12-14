package com.example.restservice;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.restservice.objects.Employee_Info;
import com.example.restservice.objects.Employee_PayInfo;
import com.example.restservice.objects.PayInfoRepository;
import com.example.restservice.objects.PersonRepository;
import com.example.restservice.objects.Person_Info;
import com.example.restservice.objects.Product;
import com.example.restservice.objects.ProductRepository;
import com.example.restservice.objects.Department;
import com.example.restservice.objects.DepartmentRepository;
import com.example.restservice.objects.EmployeeRepository;

@RestController
@EntityScan
@ComponentScan
@RequestMapping("/get")
@CrossOrigin(origins = "http://localhost:3000")
public class DatabaseController {
    private static final String template = "Hello %s";
    private AtomicInteger counter = new AtomicInteger();

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    PersonRepository personRepository;

    @Autowired
    PayInfoRepository payInfoRepository;

    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    ProductRepository productRepository;
    
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/employees")
    public List<Employee_Info> getAllEmployees() {
        List<Employee_Info> fuckItWeBall = employeeRepository.findAll();
        return fuckItWeBall;
    }

    @GetMapping("/employees/{id}")
    public Employee_Info getEmployee(@PathVariable int id) {
        List<Employee_Info> data = getAllEmployees(); 
        Employee_Info weBall = null;
        for(Employee_Info dataPoint : data)
            if(dataPoint.getEmployee_ID() == id)
                weBall = dataPoint;
        return weBall;
    }

    @PostMapping("/employees/save")
    public void findEmployee(@RequestParam String data) {
        String[] splitData = data.split("&");
        employeeRepository.save(new Employee_Info(Integer.parseInt(splitData[0]), splitData[1], splitData[2], splitData[3], splitData[4]));
    }
    
    @GetMapping("/citizensofearth")
    public List<Person_Info> getAllPeople() {
        return personRepository.findAll();
    }

    @GetMapping("/citizensofearth/{name}")
    public List<Person_Info> getPerson(@PathVariable String name) {
        String[] splitName = name.split("&");
        String fname = splitName[0];
        String lname = splitName[1];
        return personRepository.findByFnameAndLname(fname, lname);
    }

    @GetMapping("/payinfo")
    public List<Employee_PayInfo> getPayments() {
        return payInfoRepository.findAll();
    }
    
    @GetMapping("/departments")
    public List<Department> getDepartments() {
        return departmentRepository.findAll();
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
    
}
