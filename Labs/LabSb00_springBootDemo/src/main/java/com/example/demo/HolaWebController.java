package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HolaWebController {
    @RequestMapping("/helloweb")
    public String helloHandler(){

        return "hello.html";
    }
}
