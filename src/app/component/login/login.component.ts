import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: User;
loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
