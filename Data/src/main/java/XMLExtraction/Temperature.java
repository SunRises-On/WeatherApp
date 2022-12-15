package XMLExtraction;

public class Temperature {
    public int temperature;

    public Temperature(){

    }
    public Temperature(int temperature) {
        this.temperature = temperature;
    }

    public void setTemperature(int temperature){
        this.temperature = temperature;
    }
    public int getTemperature(){
        return temperature;
    }

    @Override
    public String toString() {
        return "Temperature{" +
                "temperature=" + temperature +
                '}';
    }
}
