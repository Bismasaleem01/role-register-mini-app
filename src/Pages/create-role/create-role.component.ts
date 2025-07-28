import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-role',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss',
})
export class CreateRoleComponent {
  roleForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required],
    });
  }
  submitRole() {
    if (this.roleForm.valid) {
      this.userService.createRole(this.roleForm.value).subscribe({
        next:res=>{
          alert("Role created successfully!");
          this.router.navigate(['/register-user'])
        },
        error:err=>{
          alert("Error occured in creating role");
          console.error("Error in creating role: "+err)
        }
      });
    }
  }
}
