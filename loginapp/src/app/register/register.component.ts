import {Component} from '@angular/core';
import { IRegister } from './register.model';
import { NgForm} from '@angular/forms';
import { RegisterService } from './register.service';
import { Router} from '@angular/router';

@Component({
    selector:'app-forms',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent{

    constructor(private registerService:RegisterService,
                private router:Router){}

    myEmployee = new IRegister('','','','')
    
    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.registerService.registerEmp(Form.value)
            .subscribe((res:any[]) => {console.log(`Data Posted`)})
        this.router.navigate(['/login'])
    }


}
