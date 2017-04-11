package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DockerDemoApplication {

	public static final String WEL_COME = "Welcome ";
	
	public static void main(String[] args) {
		SpringApplication.run(DockerDemoApplication.class, args);
	}
	
	@RequestMapping(value="/{name}")
	@ResponseBody
	public String sayHello(@PathVariable(value="name")String name){
		return WEL_COME+name+"!";
	}
	
	@RequestMapping(value="/")
	@ResponseBody
	public String sayHelloAnynymus(){
		return WEL_COME+ "Anonymus"+"!";
	}
	
	@RequestMapping(value="/q")
	@ResponseBody
	public String sayhelloQ(@RequestParam(name="uid")String uid){
		return WEL_COME+uid;
	}
	
}
