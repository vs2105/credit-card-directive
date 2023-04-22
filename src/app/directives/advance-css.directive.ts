import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceCss]'
})
export class AdvanceCssDirective implements OnInit {

  @Input() oncolor!:string
  @HostBinding('background-color') bgcolor:string='pink'
  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.eleRef.nativeElement,"background-color", 'pink')
    this.renderer.setStyle(this.eleRef.nativeElement, "color", "#fff")
    // this.renderer.addClass(this.eleRef.nativeElement,"alert-info")
    // this.renderer.addClass(this.eleRef.nativeElement, "alert")
  }
   
  @HostListener("mouseover") onmouseover(){
     this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "green")
    
  }

  @HostListener("mouseout") onmouseout(){
    this.renderer.setStyle(this.eleRef.nativeElement,"background-color", "orange")
  }
 

}
