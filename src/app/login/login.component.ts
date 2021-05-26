import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../Userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router, public userDataService : UserDataService
  ) {this.loginForm = this.fb.group({
    userName: [null, Validators.required],
      password: [null, Validators.required]
  }) }

  ngOnInit() {
    
  }

  onLogin(value: any) {
    console.log(value);
    const result  = this.userDataService.verifyUser(value);
    if(result) {
      alert('Login Success!');
      this.router.navigateByUrl('/dashboard');
    }else {
      alert('Login Failed!');
    }
    
  }
}