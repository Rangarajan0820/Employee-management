package com.employee.service;

import java.util.List;

import com.employee.dto.EmployeeDto;
import com.employee.dto.ResponseDto;

public interface EmployeeService {

	EmployeeDto employeeByid(String id);

	ResponseDto update(EmployeeDto employeeDto);

	ResponseDto  getData();

	

	ResponseDto delete(EmployeeDto employeedto);

	ResponseDto  save(EmployeeDto employeedto);

	ResponseDto login(EmployeeDto employeedto);

}
