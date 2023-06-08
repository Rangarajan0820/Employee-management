package com.employee.controller;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dto.EmployeeDto;
import com.employee.dto.ResponseDto;
import com.employee.service.EmployeeService;


@RestController
@CrossOrigin(origins="*",maxAge=3600)


public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/hello")
	public String print() {
		return "Hai i am rangarajan";
	}
	
	@RequestMapping(value="/save",method = RequestMethod.POST)
	public ResponseEntity<?> save(@RequestBody EmployeeDto employeedto) {
		 
		ResponseDto response=employeeService.save(employeedto);

		return new ResponseEntity<ResponseDto>(response,HttpStatus.OK);
	}
	
	@RequestMapping(value="/getAllData",method = RequestMethod.GET)
	public ResponseEntity <?> getAllData() {
		
		ResponseDto response=employeeService.getData();
		
		return new ResponseEntity<ResponseDto>(response,HttpStatus.OK);
	}
	@RequestMapping(value="/updateById",method=RequestMethod.POST)
	public ResponseEntity<?>update(@RequestBody EmployeeDto employeeDto){
		
		ResponseDto response=employeeService.update(employeeDto);
		return new ResponseEntity<ResponseDto>(response,HttpStatus.OK);
		
	}
	@RequestMapping(value="/employeeByid",method = RequestMethod.GET)
	public ResponseEntity<EmployeeDto> employeeByid(@RequestParam String id){
		EmployeeDto emp=employeeService.employeeByid(id);
		return new ResponseEntity<EmployeeDto>(emp,HttpStatus.OK);
		
	}
	@RequestMapping(value="/delete",method=RequestMethod.POST)
	public ResponseEntity<?>delete(@RequestBody EmployeeDto employeedto){
		ResponseDto responseDto=null;
		ResponseDto response=employeeService.delete(employeedto);
		return new ResponseEntity<ResponseDto>(response,HttpStatus.OK);
		
	}
	
	@RequestMapping(value="/login",method = RequestMethod.POST)
	public ResponseEntity<?> login(@RequestBody EmployeeDto employeedto) {
		
		
		ResponseDto  response=employeeService.login(employeedto);

		
		return new ResponseEntity<ResponseDto>(response,HttpStatus.OK);
	}


}
