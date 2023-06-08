package com.employee.dto;

import java.util.List;

public class ResponseDto{
	private String status;
	private Object reponseData;
	private List<?>responseData;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getReponseData() {
		return reponseData;
	}
	public void setReponseData(Object reponseData) {
		this.reponseData = reponseData;
	}
	public List<?> getResponseData() {
		return responseData;
	}
	public void setResponseData(List<?> responseData) {
		this.responseData = responseData;
	}
	}
