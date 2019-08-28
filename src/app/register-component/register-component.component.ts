import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  user: User;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      username: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

}
