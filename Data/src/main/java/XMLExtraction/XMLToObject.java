package XMLExtraction;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.*;
import java.util.List;

public class XMLToObject {
    private static final String fileName = "/WeatherApp/Data/src/main/resources/weatherXML/weather.xml";

    public static void main(String[] args){

        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();

        try{
            //used to process XML securely, avoid attacks like XML Eternal Entities (XXE)
            dbf.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);

            //parse XML file
            DocumentBuilder db = dbf.newDocumentBuilder();

            Document doc = db.parse(new File(fileName));
            //recommended
            doc.getDocumentElement().normalize();

            //get <temperature>
            NodeList list = doc.getElementsByTagName("temperature");

            for(int i=0; i< list.getLength(); i++){
                Node node = list.item(i);
                System.out.println("List length : " + list.getLength());
                    if(node.getNodeType() == Node.ELEMENT_NODE){
                        Element element = (Element) node;
                        //get temperature's attribute
                        String type = element.getAttribute("type");
                        String attr = "hourly";

                        //if <temperature type="hourly">
                        if(type.equals(attr)){

                            System.out.println("Current Element :" + node.getNodeName());
                            System.out.println("Type : "+attr);
                            //get a node list of values
                            NodeList valueNodeList = element.getElementsByTagName("value");

                            for(int j=0; j< valueNodeList.getLength(); j++){

                                Node nodeValue = valueNodeList.item(j);

                                if(node.getNodeType() == Node.ELEMENT_NODE){
                                    Element elementNode = (Element) node;
                                    String value  = elementNode.getElementsByTagName("value").item(j).getTextContent();
                                    System.out.println("Value : " + value);
                                }
                            }

                        }

                    }
            }

        } catch (ParserConfigurationException | SAXException | IOException e){
            e.printStackTrace();
        }
    }
}
