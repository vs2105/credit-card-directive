import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditcard]'
})
export class CreditcardDirective {

  constructor() { }
  @HostBinding('style.border')border!:string
  @HostListener('keyup',['$event']) 
  onKeyupevent(event : Event){
      let getinputcontrol=event.target as HTMLInputElement;
      let inputvalue= getinputcontrol.value.replace(/\s+/g,'')
      
   if(inputvalue.length > 16){
     inputvalue = inputvalue.substring(0,16)
   }

   let numbers:Array<string> = []

   for (let i=0; i< inputvalue.length; i+=4) {
     numbers.push(inputvalue.substring(i,i+4))
    
   }
   console.log(numbers)
   getinputcontrol.value=numbers.join(' ')
   this.border=''
   getinputcontrol.nextElementSibling?.classList.add('d-none')
   if(/[^\d]/.test(inputvalue)){
    getinputcontrol.nextElementSibling?.classList.remove('d-none')
    this.border="2px solid red"
   }
  }
 
}
