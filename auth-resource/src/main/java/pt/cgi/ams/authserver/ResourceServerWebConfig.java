/*
 *  
 */
package pt.cgi.ams.authserver;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
// @EnableWebMvc
@ComponentScan({"pt.cgi.ams.authserver.controller"})
public class ResourceServerWebConfig implements WebMvcConfigurer {
    //
}
