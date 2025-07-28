import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all-registered-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-registered-users.component.html',
  styleUrls: ['./view-all-registered-users.component.scss']
})
export class ViewAllRegisteredUsersComponent {
  usersData:any[]=[];
  constructor(private userService: UserService){
    this.userService.getUsers().subscribe({
      next: res=>{
        this.usersData=res as any;
      },
      error: err=>{
        console.error("Error while fetching users "+ err)
      }
    })
  }
}
