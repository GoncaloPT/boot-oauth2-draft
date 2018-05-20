/*
 *  
 */
package pt.cgi.ams.authserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author Gonçalo
 */
@Controller
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "olá";
    }

}
