package com.employee.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.employee.entity.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long>{
	@Query(value="select * from employee where name=?1",nativeQuery = true)
    Employee getDataByName(String name);

	@Query(value="select name from employee  where name=?1",nativeQuery = true)
    public String getDataByNameString(String name);
	
	 @Query(value="select password from employee  where password=?1",nativeQuery = true)
     public String getPasswordString(String password);
     
}
