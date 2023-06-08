import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // submitted = false;

  // password: string = 'password';

  // show = false;

  // profileForm = this.fb.group({
  //   name: ['', Validators.required],
  //   password: ['', Validators.required],
  // });



  public loginFrom!:FormGroup;
  
  constructor(private fb : FormBuilder,
    private service: AuthService,
    private router : Router, private http:HttpClient ) { }

    ngOnInit(): void {
this.loginFrom=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required]
})

    }
login(){
  this.http.get<any>("http://localhost:3000/signupUsers")
  .subscribe(res=>{
const user=res.find((a:any)=>{
return a.email === this.loginFrom.value.email&&a.password === this.loginFrom.value.password
});
if(user){
alert("Login Success");
this.loginFrom.reset();
this.router.navigate(['default/home'])
}else{
  alert("Please enter valid input !!!")
}

  },
  err=>{
alert("Something went Wrong!!!");
  }
  
  
  )
}




//     get f() {
//       return this.profileForm.controls;
//     }

//     onClick() {
//       if (this.password === 'password') {
//         this.password = 'text';
//         this.show = true;
//       } else {
//         this.password = 'password';
//         this.show = false;
//       }
//     }

//     login() {
//       // this.SpinnerService.show();
//       this.submitted = true;
//       if (this.profileForm.invalid) {
//         return;
//       } else {
//         this.service.login(this.profileForm.value).subscribe((response) => {
//           console.log(response);
//           if (response.status == 'success') {
// localStorage.setItem("name",response.responseDto
// .name);
// localStorage.setItem("email",response.responseDto
// .email);




    //         // this.profileForm.reset();
    //         this.submitted = false;
    //         this.router.navigateByUrl('default/home');
    //         // Swal.fire('Login Successfully', 'You Login SuccessFully', 'success');
    //       } else {
    //         Swal.fire({
    //           title: 'oops !',
    //           text: 'Enter Correct Username Or Password',
    //           icon: 'question',
    //           showCancelButton: true,
    //           confirmButtonColor: '#3085d6',
    //           cancelButtonColor: '#d33',
    //           confirmButtonText: 'Ok',
    //         });
    //       }
    //     });
    //   }
    // }
                      
}
