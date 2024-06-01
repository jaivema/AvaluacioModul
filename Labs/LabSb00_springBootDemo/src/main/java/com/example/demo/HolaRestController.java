package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaRestController {
    @GetMapping("/hellorest")
    public String helloWorld(){

        return "Hello Worlds and class!!!!";
    }
}
