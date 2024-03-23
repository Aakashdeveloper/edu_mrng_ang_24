import {Component} from '@angular/core';
import { IUser } from './forms.model';

@Component({
    selector:'app-forms',
    templateUrl:'./forms.component.html',
    styleUrls:['./forms.component.css']
})

export class FormsComponent{

    language:string[] = ["Node","React","Angular","Javascript"]
    myEmployee = new IUser('','','','','')
    hasCodeLangError:boolean = false;

    validateCodeLang():void{
        if(this.myEmployee.clang === 'default'){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }
}