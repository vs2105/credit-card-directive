import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAadharCard]'
})
export class AadharCardDirective {

  constructor() { }
  @HostBinding('style.border')border!:string
  @HostListener('keyup',['$event'])
  onKeyupevent(event:Event){
    let getFormcontrol=event.target as HTMLInputElement;
    // console.log(getFormcontrol)
    let inputcontrolvalue=getFormcontrol.value.replace(/\s+/g,'')
   
     if(inputcontrolvalue.length > 16){
      inputcontrolvalue=inputcontrolvalue.substring(0,16)
      // console.log(inputcontrolvalue)
     }
     let numberpush:Array<string>=[]

     for (let i = 0; i< inputcontrolvalue.length; i+=4) {
      numberpush.push(inputcontrolvalue.substring(i,i+4))
     }
     getFormcontrol.value=numberpush.join(' ')
     
     getFormcontrol.nextElementSibling?.classList.add('d-none')
     if(/[^\d]/.test(inputcontrolvalue)){
      getFormcontrol.nextElementSibling?.classList.remove('d-none')
       this.border="2px solid red"
     }
    
  }

 

}
