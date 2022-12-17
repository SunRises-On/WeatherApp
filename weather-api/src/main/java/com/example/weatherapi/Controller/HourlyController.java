package com.example.weatherapi.Controller;

import com.example.weatherapi.Entity.Hourly;
import com.example.weatherapi.Repo.HourlyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value ="http://localhost:3000")
@RequestMapping("/api/v1/")
@RestController
public class HourlyController {
    @Autowired
    private HourlyRepo hourlyRepo;

    @GetMapping("/hourly")
    public Map<String,Map<String, List<Hourly>>> GetHourly(){
        List<Hourly> temp = hourlyRepo.findAll();
        Map<String, List<Hourly>> map = new HashMap<>();
        map.put("allTemps",temp);
        Map<String,Map<String,List<Hourly>>> temperatures = new HashMap<>();
        temperatures.put("temps",map);
        return temperatures;
    }
}
