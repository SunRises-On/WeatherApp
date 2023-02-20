# WeatherApp
GUI for the NOAA website. Showcasing temperatures for the next 24 hours.

How it works is it grabs the XML document from the NOAA website, and extracts hourly temperatures. The temperatures are then stored in a database and a Cron Job is started every 5 minutes to download temperatures. On the frontend the temperatures are displayed in a table after logging in.


# Security

Secured through Spring Security and JWT tokens.

# Technologies

## Frontend
- React
- Javascript
- CSS
- HTML
- XML

## Backend
- Spring Boot 3.0.0
- Spring Security 6.0
- Java 17
- MySQL
- JPA
- Hibernate
