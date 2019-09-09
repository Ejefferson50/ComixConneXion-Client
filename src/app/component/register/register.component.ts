import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../validators/password.validator';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: [''],
      confirmPassword: ['']
    }, {validator: PasswordValidator}
    );
  }
  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get fields() {
    return this.registerForm.controls;
  }

  registerNewUser(){
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    }
  }

  onRegister(){
    //Stops if form is invalid
    if (this.registerForm.invalid){
      return;
    }

  }

}
