import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder,FormGroup, Validators} from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public signupFrom!:FormGroup;
  constructor(private fromBuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  

  ngOnInit(): void {
    this.signupFrom=this.fromBuilder.group({
fullname:['',Validators.required],
email:['',Validators.required],
password:['',Validators.required],
mobile:['',Validators.required]
    })

    }



    signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupFrom.value)
    .subscribe(res=>{
      alert("signUp successfull");
      this.signupFrom.reset();
      this.router.navigate(['login']);
      
    },
    err=>{
      alert("Somthing went wrong??")
    }
    )

    
    }

  }
 



