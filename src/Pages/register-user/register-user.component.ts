import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent implements OnInit{
  userData:FormGroup;
  roles:any[]=[];
  errMessage:string='';
  ngOnInit(){
    this.userService.getRoles().subscribe({
      next:(res:any)=>{
        this.roles=res;
      },
      error:err=>{
        console.error("Error in fetching roles")
      }
    });
  }
  constructor(private fb:FormBuilder, private userService:UserService){
    this.userData=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      roleName:['',Validators.required]
    })
  }
  submitUser(){
    if(this.userData.valid){
      this.userService.registerUser(this.userData.value).subscribe({
        next:res=>{
          debugger
          alert("User Registered successfully!");
          this.userData.reset();
          console.log(res)
        },
        error:err=>{
          console.error("Registering user error: "+err);
        }
      });
    }
    else{
      this.errMessage="Please fill in all the fields to proceed!";
    }
  }
}
