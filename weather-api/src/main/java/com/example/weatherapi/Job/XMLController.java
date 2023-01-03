package com.example.weatherapi.Job;



import com.example.weatherapi.Job.InsertIntoMySql.TempController;
import com.example.weatherapi.Job.XMLExtraction.NewTemperatureList;
import com.example.weatherapi.Job.XMLExtraction.Temperature;
import com.example.weatherapi.Job.getData.DownloadXML;

import java.util.List;

public class XMLController {

    DownloadXML downloadXML;
    NewTemperatureList tempList;

    TempController tempController;

    public void Start() throws Exception {
        //download XML from NOA URL
        downloadXML = new DownloadXML();

        downloadXML.start();
        //extract temperatureList from XML
        tempList = new NewTemperatureList();

        List<Temperature> temperatures = tempList.returnListTemp();
        //update or create temperature database
        tempController = new TempController();

        tempController.handle(temperatures);

    }


}
