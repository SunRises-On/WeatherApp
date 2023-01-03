package com.example.weatherapi.Job.getData;

import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

public class DownloadXML {
    public void start(){
        //   String url = "https://forecast.weather.gov/MapClick.php?lat=41.9923&lon=-88.0261&FcstType=digitalDWML";
        String url = "https://forecast.weather.gov/MapClick.php?lat=21.4589&lon=-157.9734&FcstType=digitalDWML";
        String nio = "/WeatherApp/Data/src/main/resources/weatherXML/weather.xml";
        String stream ="/WeatherApp/Data/src/main/resources/weatherXML/weather_stream.xml";
        try{
            downloadUsingNIO(url, nio);

            downloadUsingStream(url, stream);
            System.out.println("Downloaded file successfully!");
        }catch (IOException e){
            e.printStackTrace();
        }


    }

    private void downloadUsingStream(String urlStr, String file) throws IOException{
        URL url = new URL(urlStr);
        BufferedInputStream bis = new BufferedInputStream(url.openStream());
        FileOutputStream fis = new FileOutputStream(file);
        byte[] buffer = new byte[1024];
        int count = 0;
        while((count = bis.read(buffer,0,1024)) != -1){
            fis.write(buffer, 0, count);
        }
        fis.close();
        bis.close();
    }
    private void downloadUsingNIO(String urlStr, String file)throws IOException{
        URL url = new URL(urlStr);
        ReadableByteChannel rbc = Channels.newChannel(url.openStream());
        FileOutputStream fos = new FileOutputStream(file);
        fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
        fos.close();
        rbc.close();
    }
}