import { Directive, ElementRef, OnInit } from "@angular/core";





@Directive({
    selector :'[BasicCss]'
})

export class BasicCssdirective implements OnInit{
    constructor(private eleRef:ElementRef){

    }
    ngOnInit(): void {
        console.log(this.eleRef.nativeElement);
        //    this.eleRef.nativeElement.style.backgroundcolor ="pink"
        this.eleRef.nativeElement.style.backgroundColor="pink"
        this.eleRef.nativeElement.style.color="#fff"
    }
    
}