import {ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";
import {Directive,Input} from "@angular/core"

export function checkname(regpattern):ValidatorFn{
    return(control:AbstractControl):{[key:string]:any} | null => {
        const checkedvalue = regpattern.test(control.value);
        return checkedvalue ? {'checkname':{value:control.value}} : null;
    }
}

@Directive({
    selector:"[appCheckname]",
    providers:[{provide:NG_VALIDATORS,useExisting:checkName,multi:true}]
})
export class checkName implements Validator{
    @Input('appCheckname') nameRe:any
    validate(control:AbstractControl):{[key:string]:any} | null{
        
        let nameregexp = new RegExp(this.nameRe , "i");

        const checkedvalue = nameregexp.test(control.value)
        return checkedvalue ? {"ckeckName":{value:control.value}}: null
    }
}