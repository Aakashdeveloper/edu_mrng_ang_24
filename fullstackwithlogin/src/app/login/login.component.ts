import {Component} from '@angular/core';
import { ILogin,LoginRes,userRes } from './login.model';
import { NgForm} from '@angular/forms';
import { LoginService } from './login.service';
import { Router} from '@angular/router';

@Component({
    selector:'app-forms',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{

    constructor(private loginService:LoginService,
                private router:Router){}

    myEmployee = new ILogin('aakash@gmail.com','12345678')
    loginError:string='';
    
    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.loginService.loginEmp(Form.value)
            .subscribe((res:LoginRes) => {
                this.loginError = ''
                this.loginService.getUserInfo(res['token'])
                .subscribe((response:userRes) => {
                    this.validateUser(response['role'])
                })
            },(err:any[])=>{
                this.loginError = "Please Enter Valid Information"
            })
    }


    validateUser(roleType:string){
        localStorage.setItem('Role_Type',roleType);
        this.router.navigate(['/'])
    }


}
