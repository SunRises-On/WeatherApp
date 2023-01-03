import InsertIntoMySql.TempController;
import XMLExtraction.NewTemperatureList;
import XMLExtraction.Temperature;
import getData.DownloadXML;

import java.util.List;

public class Main {

    static DownloadXML downloadXML;
    static NewTemperatureList tempList;

    static TempController tempController;

    public static void main(String[] args) throws Exception {
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
