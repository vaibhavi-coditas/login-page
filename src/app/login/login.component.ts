import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserDataService } from '../Userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  path = '/dashboard';
  loginForm: FormGroup;

  constructor(fb: FormBuilder,  private userDataService: UserDataService, private router: Router) {
    this.loginForm = fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    }) 
   }

  ngOnInit(): void {
    console.log('ON INIT LOGIN')
  }

  onLogin(value: any) {
    console.log(value);
    const result  = this.userDataService.verifyUser(value);
    if(result) {
      alert('Login Success! ');
      this.router.navigateByUrl('/dashboard');
    }else {
      alert('Login Failed! Please check user ID and Password is Entered Correctly');
    }
    
  }

}
