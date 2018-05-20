/*
 *  
 */
package pt.cgi.ams.authserver;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

/**
 *
 * @author Gonçalo
 */
@Configuration
public class ResourceSecurityConfig extends WebSecurityConfigurerAdapter {

    public void configure(HttpSecurity http) throws Exception {
        http.antMatcher("/**")
                .authorizeRequests()
                .antMatchers("/", "/login**").hasRole("user")
                .anyRequest().authenticated()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint());
    }

    private AuthenticationEntryPoint authenticationEntryPoint() {
        return new AuthenticationEntryPoint() {
            // You can use a lambda here
            @Override
            public void commence(HttpServletRequest aRequest, HttpServletResponse aResponse,
                    AuthenticationException aAuthException) throws IOException, ServletException {
                System.out.println("testing");
                aResponse.sendRedirect("http://localhost:8080" + "?redirect_uri=localhost:9001/home");
            }
        };
    }

}
