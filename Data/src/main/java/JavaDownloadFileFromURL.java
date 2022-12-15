import java.io.*;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.util.ArrayList;
import java.util.List;

public class JavaDownloadFileFromURL {
    public static void main(String[] args) {
        String url = "https://forecast.weather.gov/MapClick.php?lat=36.4336&lon=-99.399&FcstType=digitalDWML";

        String nio = "/WeatherApp/Data/src/main/resources/weatherXML/weather.xml";
        String stream ="/WeatherApp/Data/src/main/resources/weatherXML/weather_stream.xml";
        try{
            downloadUsingNIO(url, nio);

            downloadUsingStream(url, stream);
        }catch (IOException e){
            e.printStackTrace();
        }


    }

    private static void downloadUsingStream(String urlStr, String file) throws IOException{
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
    private static void downloadUsingNIO(String urlStr, String file)throws IOException{
        URL url = new URL(urlStr);
        ReadableByteChannel rbc = Channels.newChannel(url.openStream());
        FileOutputStream fos = new FileOutputStream(file);
        fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
        fos.close();
        rbc.close();
    }
}
