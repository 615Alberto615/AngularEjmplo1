import { User } from 'src/app/modelo/user';
import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   
  userService:UsersService= inject( UsersService);
  users: User[] = [];
  ngOnInit(): void{
    console.log("ngOnInit");
    this.userService.getUsers().subscribe(users=>{
      console.log(users);
      this.users=users;
    });
  }
}
