import {Component} from '@angular/core';
import { IUser } from './forms.model';
import { NgForm} from '@angular/forms';
import { FormsService } from './forms.service';
import { Router} from '@angular/router';

@Component({
    selector:'app-forms',
    templateUrl:'./forms.component.html',
    styleUrls:['./forms.component.css']
})

export class FormsComponent{

    constructor(private formsService:FormsService,
                private router:Router){}

    language:string[] = ["Node","React","Angular","Javascript"]
    myEmployee = new IUser('Neha','','','','')
    hasCodeLangError:boolean = false;

    validateCodeLang():void{
        if(this.myEmployee.clang === 'default'){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }
    
    firstToUpper(value:string):void{
        if(value.length > 0 ){
            value = value.trim()
            this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()

        }else{
            this.myEmployee.firstName = value 
        }
    }

    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.formsService.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log(`Data Posted`)})

        this.router.navigate(['/after'])
    }


}