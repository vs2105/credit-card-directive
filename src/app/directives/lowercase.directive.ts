import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor(private eleRef:ElementRef ) { }
  // @HostListener("keyup") onkeyup(){
  //   let val= this.eleRef.nativeElement.value as string;
  //   this.eleRef.nativeElement.value=val.toLowerCase()
  // }

  @HostListener('keyup',['$event'])
  onKeyupevent(event : Event){
    let getinputcontrol = event.target as HTMLInputElement;
    let value = getinputcontrol.value as string;
    let result = value.toLowerCase();
    getinputcontrol.value=result
    console.log(result)
  }


}
