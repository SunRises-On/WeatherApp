import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;

public class JavaAddTemperatureFromXML {

    private List<Temperature> temperatures = new ArrayList<>();
    private Temperature temperature;
    private String text;

    public List<Temperature> getTemperatures(){
        return temperatures;
    }

    public List<Temperature> parse(InputStream is) {
        try {
            XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
            factory.setNamespaceAware(true);
            XmlPullParser parser = factory.newPullParser();

            parser.setInput(is, null);

            int eventType = parser.getEventType();
            while (eventType != XmlPullParser.END_DOCUMENT) {
                String tagname = parser.getName();
                String type1 = parser.getAttributeType(0);
                String type2 = parser.getAttributeType(1);
                System.out.println("tagname=" + tagname + " type1=" + type1 + " type2=" + type2);
                switch (eventType) {
                    case XmlPullParser.START_TAG:
                        if (tagname.equalsIgnoreCase("temperature")) {
                            temperature = new Temperature();
                        }
                        break;
                    case XmlPullParser.TEXT:
                        text = parser.getText();
                        break;
                    case XmlPullParser.END_TAG:
                        if (tagname.equalsIgnoreCase("temperature")) {
                            temperatures.add(temperature);
                        }///
                        break;
                    default:
                        break;
                }
                eventType = parser.next();
            }
        }
        
    }



}
