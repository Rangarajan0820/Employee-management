package com.employee.service;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dto.EmployeeDto;
import com.employee.dto.ResponseDto;
import com.employee.entity.Employee;
import com.employee.repo.EmployeeRepo;


@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeRepo employeeRepo;

	

	
	@Override
	public EmployeeDto employeeByid(String id) {
		EmployeeDto emp=new EmployeeDto();
		Optional<Employee>emp1=employeeRepo.findById(Long.valueOf(id));
		if(emp1.isPresent()) {
			emp.setId(String.valueOf(emp1.get().getId()));
			emp.setName(emp1.get().getName());
			emp.setEmail(emp1.get().getEmail());
			emp.setMobileno(String.valueOf(emp1.get().getMobileno()));
			emp.setPassword(String.valueOf(emp1.get().getPassword()));
			emp.setCity(emp1.get().getCity());
			emp.setRole(emp1.get().getRole());
			
		}
		return emp;
	}


	@Override
	public ResponseDto update(EmployeeDto employeeDto) {
	ResponseDto response=new ResponseDto();
		try {
			Employee entity=employeeRepo.getDataByName(employeeDto.getName());
			entity.setEmail(employeeDto.getEmail());
			entity.setId(Long.valueOf(employeeDto.getId()));
			entity.setCity(employeeDto.getCity());
			entity.setMobileno(Integer.valueOf(employeeDto.getMobileno()));
			entity.setPassword(Integer.valueOf(employeeDto.getPassword()));
			entity.setRole(employeeDto.getRole());
			response.setStatus("Success");
			employeeRepo.save(entity);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return response;
		
	}


	@Override
	public ResponseDto  getData() {
		List<Employee>list=employeeRepo.findAll();
		ResponseDto dto1=new ResponseDto();
		try {
			dto1.setReponseData(list);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return dto1;
		}
		
		

	
	


	@Override
	public ResponseDto delete(EmployeeDto employeedto) {
		ResponseDto response=new ResponseDto();
		try {
			Employee entity=employeeRepo.getDataByName(employeedto.getName());
	employeeRepo.deleteById(entity.getId());
			response.setStatus("DELETE");
		} catch (Exception e){
			response.setStatus("ERROR OCCURED");
		}
		
		return response;
		
		
		
	}


	@Override
	public ResponseDto save(EmployeeDto employeedto) {
		   ResponseDto response=new ResponseDto();
			
			try {
				if(employeedto !=null) {
					Employee entity=new Employee();
					
					entity.setName(employeedto.getName());
					entity.setEmail(employeedto.getEmail());
					entity.setMobileno(Integer.valueOf(employeedto.getMobileno()));
					entity.setPassword(Integer.valueOf(employeedto.getPassword()));
					entity.setCity(employeedto.getCity());
					entity.setRole(employeedto.getRole());
				   
				    employeeRepo.save(entity);
				    System.err.println(entity);
				    response.setStatus("success");
				   
				}  
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		    	return response;
		
		
	}


	@Override
	public ResponseDto login(EmployeeDto employeedto) {

		ResponseDto response=new ResponseDto();
		
		try {
			String str="";
			
			String name=employeedto.getName();
			String password=employeedto.getPassword();
			System.err.println(name+"      "+password);
			
			if (name.equalsIgnoreCase(employeeRepo.getDataByNameString(name))
					&& password.equalsIgnoreCase(employeeRepo.getPasswordString(password))) {
				str = "login successful";
				response.setStatus("success");
			} else {
				response.setStatus("failed");
				
			}
		} catch (Exception e) {
			
		}
		
		return response;
		
		
		
		
	}

}
