import { Directive,ElementRef , HostListener , Input } from '@angular/core';

@Directive({
  selector: '[appSampledirector]'
})
export class SampledirectorDirective {
  deafultcolor:string = "blue"
  @Input('appSampledirector') newColor :any
  constructor(private ref:ElementRef) {
    console.log(typeof(ref.nativeElement))
   // this.showcolor('red')
    this.showcolor()
  /*   ref.nativeElement.style.color = 'blue'
    ref.nativeElement.style.fontSize = "34px"
    ref.nativeElement.style.backgroundColor = "grey" */
   }
   private showcolor(color?:string){
     this.ref.nativeElement.style.color = color || this.deafultcolor
   }
   private showmsg(msg?:string){
    this.ref.nativeElement.textContent = msg || "default no msg"
  }
@HostListener('mouseenter') onMouseEnter(){
  this.showcolor(this.newColor)
}
@HostListener('mouseleave') onMouseremove(){
  this.showcolor()
}
@HostListener('click') changecontent(){
  //this.ref.nativeElement.textContent = Math.ceil(Math.random()*6)
  this.showcolor(this.newColor.color)
  this.showmsg(this.newColor.message)


}

}
