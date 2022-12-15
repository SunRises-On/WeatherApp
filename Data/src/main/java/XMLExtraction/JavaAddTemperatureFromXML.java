package XMLExtraction;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import XMLExtraction.Temperature;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;

public class JavaAddTemperatureFromXML {
    private static final String DWML = "dwml";
    private static final String DATA = "data";
    private static final String PARAMETERS = "parameters";
    private static final String TEMPERATURE = "temperature";
    private static final String TYPE_TEMPERATURE = "hourly";
    private static final String VALUE = "value";

    private List<Temperature> temperatures = new ArrayList<>();
    private Temperature temperature;
    private String text;

    public List<Temperature> getTemperatures(){
        return temperatures;
    }

    //public List<Temperature> parse(InputStream is) {

    //}



}
