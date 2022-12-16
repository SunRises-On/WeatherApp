package XMLExtraction;



import InsertIntoMySql.TempController;

import java.util.List;

public class XMLToObject {

    public static void main(String[] args) throws Exception {
        NewTemperatureList newTemp = new NewTemperatureList();
        List<Temperature> temperatures = newTemp.returnListTemp();
        TempController tempController = new TempController();
        tempController.handle(temperatures);

    }


}
