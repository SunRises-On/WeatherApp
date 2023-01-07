package com.example.weatherapi.Security.Config;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws  Exception{

        http
                .csrf()
                .disable()
                .authorizeHttpRequests()
                //white list that don't require security (tokens)
                //for example homepage and creating an account
                .requestMatchers("/home")
                .permitAll()
                .requestMatchers("/api/v1/auth/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                //spring will create a new session for each request
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                //tell authentication provider to use
                .authenticationProvider(authenticationProvider)
                //use the jwt filter we created
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
                



        return http.build();
    }
}
