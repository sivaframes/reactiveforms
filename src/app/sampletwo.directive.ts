import { Directive,ElementRef , Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSampletwo]',
 
})
export class SampletwoDirective implements OnInit {
  @Input() newcolor :String
  
  

  constructor(private reference : ElementRef) {
   
   }
 
ngOnInit()
{
console.log(this.newcolor)
this.reference.nativeElement.style.backgroundColor = this.newcolor
}

 
}
