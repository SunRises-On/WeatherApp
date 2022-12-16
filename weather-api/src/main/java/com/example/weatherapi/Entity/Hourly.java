package com.example.weatherapi.Entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="hourly")
public class Hourly implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name = "temperature")
    private int temperature;

    public Hourly(){

    }

    public Hourly(int temperature) {
        this.temperature = temperature;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }
}
