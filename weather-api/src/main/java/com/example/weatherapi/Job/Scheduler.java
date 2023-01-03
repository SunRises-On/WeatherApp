package com.example.weatherapi.Job;


import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;

@Component
public class Scheduler {
    @Scheduled(cron = "* * * ? * * ")
    public void cronJobSch() throws Exception {
        //SimpleDateFormat simpleDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        XMLController now = new XMLController();
        now.Start();
      //  String strDate = simpleDate.format(now);
       // System.out.println("Java cron job expression:: " + strDate);
    }
}