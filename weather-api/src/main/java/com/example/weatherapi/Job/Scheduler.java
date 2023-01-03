package com.example.weatherapi.Job;


import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Component
public class Scheduler {
    //Cron job every 5 minutes
    @Scheduled(cron = "0 */5 * ? * * ")
    public void cronJobSch() throws Exception {

        XMLController now = new XMLController();
        now.Start();

        Instant instant = Instant.now();
        ZoneOffset zoneOffset = ZoneOffset.of("-06:00"); //UTC to Central Time
        OffsetDateTime offsetDateTime= instant.atOffset(zoneOffset);
        //Format time and stop displaying "-06:00" and nanoseconds
        DateTimeFormatter dateTF = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");
        System.out.println("Java cron job expression:: " + dateTF.format(offsetDateTime));

        //print nanoseconds
        //System.out.println("Java cron job expression:: " + offsetDateTime.toString());
    }
}