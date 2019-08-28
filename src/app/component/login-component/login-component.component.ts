import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
user: User;
loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

}
