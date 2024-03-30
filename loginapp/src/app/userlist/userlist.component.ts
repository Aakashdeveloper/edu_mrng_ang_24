import { Component, OnInit } from '@angular/core';
import { UserService } from './userlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  constructor(
    private userService: UserService,
    private router: Router
  ){}


  userList:any[] = []

  ngOnInit(): void {
    this.userService.userList()
      .subscribe((res:any[]) => this.userList = res)
  }

  logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login'])
  }



}
