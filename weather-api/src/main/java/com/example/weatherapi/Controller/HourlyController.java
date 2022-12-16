package com.example.weatherapi.Controller;

import com.example.weatherapi.Entity.Hourly;
import com.example.weatherapi.Repo.HourlyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(value ="http://localhost:3000")
@RequestMapping("/api/v1/")
@RestController
public class HourlyController {
    @Autowired
    private HourlyRepo hourlyRepo;

    @GetMapping("/hourly")
    public List<Hourly> GetHourly(){
        return hourlyRepo.findAll();
    }
}
