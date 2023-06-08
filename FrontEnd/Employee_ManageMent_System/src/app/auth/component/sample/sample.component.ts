import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  submitted = false;
  constructor(private fb: FormBuilder, private service: AuthService) { }

  get f() {
    return this.sampleForm.controls;
  }

  sampleForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobileno: ['', Validators.required],
    city: ['', Validators.required],
    role: ['', Validators.required],
  
   password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.sampleForm.invalid) {
      return;
    } else {
      console.log('saravana');

      {
        this.service.save(this.sampleForm.value).subscribe((response) => {
          console.log(response);
          if (response.status == 'success') {
            this.sampleForm.reset();
            this.submitted = false;
            Swal.fire('Thank You....', 'You Submitted SuccessFully', 'success');
          }
        });
      }
    }
  }

}
