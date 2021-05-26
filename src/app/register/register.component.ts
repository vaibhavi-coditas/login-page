import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../Userdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  [x: string]: any;
  
  registerForm: FormGroup;
  user : any = {};
   
  constructor( private fb:FormBuilder, private userDataService : UserDataService
    ) 
  {
    this.registerForm = fb.group({
      email : [null, Validators.compose([Validators.required, Validators.email])],
      userName: [null, Validators.required],      
      password: [null, Validators.required],
    }); 
    
  }

  ngOnInit() {
    
  }

  onRegister(value: any) {
    console.log(value);
    this.userDataService.saveUser(value);
    alert('User Saved!');
  }
 
}

