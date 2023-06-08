import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';



declare var $: any;

export interface CommonDto {
  status: String;
  responseDto: any;
  responseData: any;
}


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  dataList: any;

  profileForm = this.fb.group({
    name: [''],
    email: [''],
    mobileno: [''],
    role: [''],
    city: [''],
    id: [''],
  });
 

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    this.getAllData();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getAllData() {
    this.service.get().subscribe((Response: CommonDto) => {
      console.log(Response);
      this.dataList = Response.responseDto;
      console.log(this.dataList);
      $(document).ready(function () {
        $('#example').DataTable();
      });
    });
  }

  edit(row: any) {
    // localStorage.setItem('empName', row);

    this.router.navigateByUrl('/default/edit');

    localStorage.setItem('empName', row.name);
     localStorage.setItem('name', row.name);
     localStorage.setItem('email', row.email);
     localStorage.setItem('phone', row.phone);
     localStorage.setItem('dob', row.dob);
     localStorage.setItem('gender', row.gender);
    
     console.log(row);
  }

  update() {
    this.service
      .update(this.profileForm.value)
      .subscribe((Response: CommonDto) => {
        console.log(Response);
        if (Response.status == 'Success') {
          Swal.fire('', 'Updated SuccessFully', 'success');
        }
        this.ngOnInit();
      });
  }

  delete(row: any) {
    this.profileForm.controls['name'].setValue(row.name);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want Delete this File!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deletedata(this.profileForm.value).subscribe((data) => {
          console.log(data);
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.getAllData();
        this.ngOnInit;
        location.reload();
      }
    });

}
}