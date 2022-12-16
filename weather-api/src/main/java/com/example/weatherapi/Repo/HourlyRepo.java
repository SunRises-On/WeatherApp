package com.example.weatherapi.Repo;


import com.example.weatherapi.Entity.Hourly;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HourlyRepo extends JpaRepository<Hourly, Integer> {
}
