import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { userRes } from '../login/login.model';
import { LoginService } from '../login/login.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css',]
})

export class HeaderComponent implements OnInit{
   
    constructor(
        private router:Router,
        private loginService:LoginService
    ){}
    token:string|null = '';
    userInfo:userRes={
        "_id":'',
        "name":'',
        "email":'',
        "phone":'',
        "role":'',
        "__v":0
    }

    ngOnInit():void{
        this.token = localStorage.getItem('Token_Number')?localStorage.getItem('Token_Number'):''
        this.loginService.getUserInfo(this.token?this.token:'')
        .subscribe((res:userRes) => {
            this.userInfo = res
        })
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number')
        this.router.navigate(['/']);
        window.location.reload()
    }
}