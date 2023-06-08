import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { CommonDto } from '../view/view.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  sampleForm = this.fb.group({
    name: [''],
    email: [''],
    mobileno: [''],
    city: [''],
    role: [''],
    password: [''],
  });


  ngOnInit(): void {
    var name = localStorage.getItem('name');
    this.service.getDataByName(name).subscribe((Response) => {
      console.log(Response);
      console.log(Response.responseData.name);
      this.sampleForm.controls['name'].setValue(Response.responseData.name);
      this.sampleForm.controls['email'].setValue(Response.responseData.email);
      this.sampleForm.controls['mobileno'].setValue(Response.responseData.mobileno);
      this.sampleForm.controls['city'].setValue(Response.responseData.city);
      this.sampleForm.controls['role'].setValue(Response.responseData.role);
      
      
    });
  }
  
  save() {
    this.service
      .update(this.sampleForm.value)
      .subscribe((Response: CommonDto) => {
        console.log(Response);
        if (Response.status == 'Success') {
          Swal.fire('', 'Updated SuccessFully', 'success');
        }
        this.router.navigateByUrl('/default/view');
      });
  }

}
