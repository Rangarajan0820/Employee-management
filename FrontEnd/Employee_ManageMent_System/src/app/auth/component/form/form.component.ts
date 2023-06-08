import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  submitted = false;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobileno: ['', Validators.required],
    city: ['', Validators.required],
    role: ['', Validators.required],
    
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    //console.log(this.f);
    this.submitted = true;
    // console.log(this.f['name'].errors);
    // console.log(this.profileForm.controls);
    if (this.profileForm.invalid) {
      return;
    } else {
      this.service.save(this.profileForm.value).subscribe((response) => {
        console.log(response);
        if (response.status == 'success') {
          this.profileForm.reset();
          this.submitted = false;
          Swal.fire('Thank You....', 'You Submitted SuccessFully', 'success');
        }
      });
    }
    console.warn(this.profileForm.value);
  }
get name(){
  return this.profileForm.get('name')!;
}
get email(){
  return this.profileForm.get('email')!;
}
get mobileno(){
  return this.profileForm.get('mobileno')!;

}
get  password(){
  return this.profileForm.get('password');
}

get city(){
  return this.profileForm.get('city')!;
}
get role(){
  return this.profileForm.get('role')!;
}

  getAllData() {
    console.log(this.profileForm.value);
    this.router.navigateByUrl('view');
  }

}
