package com.example.weatherapi.Controller;

import com.example.weatherapi.Entity.Hourly;
import com.example.weatherapi.Repo.HourlyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(value="http://localhost:3000")
//@CrossOrigin(maxAge = 3600);
@RestController
@RequestMapping("/api/v1")
//@RequestMapping("/api/v1/hourly")
public class  HourlyController {
    @Autowired
    private HourlyRepo hourlyRepo;

    @GetMapping("/hourly")
   // @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "Requestor-Type")
    //@GetMapping
//    public ResponseEntity<List<Hourly>> GetHourly(@RequestParam String type){
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("X-Get-Header", "ExampleHeader");
//        return ResponseEntity.ok().headers(headers).body(hourlyRepo.findAll());
//    }
    public Map<String,Map<String, List<Hourly>>> GetHourly(){
        List<Hourly> temp = hourlyRepo.findAll();
        Map<String, List<Hourly>> map = new HashMap<>();
        map.put("allTemps",temp);
        Map<String,Map<String,List<Hourly>>> temperatures = new HashMap<>();
        temperatures.put("temps",map);
        System.out.println(temperatures.toString());
        return temperatures;
    }
}
