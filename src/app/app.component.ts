import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup,ReactiveFormsModule,FormsModule, Validators } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'email1';

  loginform =  new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email]),
   
    password: new FormControl('',[Validators.required, Validators.minLength( 8)]),
    Gender: new FormControl(''),
    State: new FormControl('')

  })

 get Email(){
  return this.loginform.get('Email');
 }
 get password(){
  return this.loginform.get('password');
 }

 onSubmit(){
   console.log('valid?',this.loginform.valid);
   console.log( this.loginform.value);

 }


}