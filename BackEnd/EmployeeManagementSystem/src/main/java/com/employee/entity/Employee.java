package com.employee.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Employee")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Employee_SEQ")
	@SequenceGenerator(name = "Employee_SEQ", sequenceName = "Employee_SEQ", allocationSize = 1)
	private Long id;
	@Column(name="NAME")
	private String name;
	@Column(name="MOBILE_NO")
	private Integer mobileno;
	
	@Column(name="EMAIL")
	private String email;
	@Column(name="PASSWORD")
	private Integer password;
	@Column(name="CITY")
	private String city;
	@Column (name="ROLE")
	private String role;
	
	public Integer getMobileno() {
		return mobileno;
	}
	public void setMobileno(Integer mobileno) {
		this.mobileno = mobileno;
	}
	
	
	
	

	
	public Integer getPassword() {
		return password;
	}
	public void setPassword(Integer password) {
		this.password = password;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

}
