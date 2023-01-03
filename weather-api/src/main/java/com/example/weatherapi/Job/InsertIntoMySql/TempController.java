package com.example.weatherapi.Job.InsertIntoMySql;



import com.example.weatherapi.Job.XMLExtraction.Temperature;

import java.sql.*;
import java.util.List;

public class TempController {
    public void handle(List<Temperature> list) {
        try{

            Connection con = getConnection();
            con.setAutoCommit(true);
            if(!con.isClosed()) {

                //System.out.println("Connection established ...");

                Boolean exist = checkIfExist(con);
                //System.out.println("Exist = " + exist);
                if (!exist) {
                    insert(con, list);

                }else{
                   // System.out.println("First 24 hour temperature already exists just update it!");
                    update(con, list);
                }
            }

        }catch(SQLException e){
            System.out.println("Error " + e);
        }
        catch (Exception e){
            System.out.println("Unable to connect to database" + e);
        }


    }

    private Connection getConnection() throws Exception{
        //Register the Driver
        DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
        String mysqlUrl = "jdbc:mysql://localhost:3306";

        return DriverManager.getConnection(mysqlUrl, "root","password");
    }

    public Boolean checkIfExist(Connection con) {
        try{
            PreparedStatement ps = con.prepareStatement("SELECT COUNT(*) FROM sys.hourly WHERE id = ?");
            ps.setInt(1,24);
            ResultSet rs = ps.executeQuery();
           // System.out.println("ResultSet : " + rs.toString());
            int n=0;
            if(rs.next()){
                n=rs.getInt(1);
                //System.out.println("Reultset length = " + n);

            }
            if(n>0){
                return true;
            }
        }catch(SQLException e){
            System.out.println("SQLException : " + e);
        }
        return false;
    }

    public void insert(Connection con, List<Temperature> list){
        try{
            int i = 1;
           //System.out.println(" We don't have a sys.hourly table created");
            //System.out.println(list);

            //PreparedStatement pstmt = con.prepareStatement("CREATE TABLE sys.hourly (id INTEGER NOT NULL, temperature INTEGER)");
            //pstmt.execute();

            PreparedStatement pstmt = con.prepareStatement("INSERT INTO sys.hourly VALUES (?,?)");

            for (Temperature t : list) {

                pstmt.setInt(1, i);
                pstmt.setInt(2, t.getTemperature());
                pstmt.execute();
                ++i;
                if (i == 25) {
                    break;
                }
            }
            //System.out.println("Updated Successfully!");
        }catch(SQLException e){
            System.out.println("SQLException : " + e);
        }
    }
    public void update(Connection con, List<Temperature> list){
        try{
            int i = 1;

            //System.out.println(list);

            PreparedStatement pstmt = con.prepareStatement("UPDATE sys.hourly SET temperature=? WHERE id=?");

            for (Temperature t : list) {

                pstmt.setInt(1, t.getTemperature());
                pstmt.setInt(2, i);
                pstmt.execute();
                ++i;
                if (i == 25) {
                    break;
                }
            }
        }catch(SQLException e){
            System.out.println("SQLException : " + e);
        }
    }
}
