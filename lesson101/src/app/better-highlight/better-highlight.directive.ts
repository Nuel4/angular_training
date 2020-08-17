import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
//@Input() defaultColor : string ='blue';  //  setting color by default
//@Input() highlightColor : string ="brown";



  @HostBinding('style.backgroundColor') backgroundColor:string='brown'; //can use @hostbinding to style object

  //@HostBinding('style.backgroundColor') backgroundColor:string;


  constructor(private eleRef: ElementRef , private renderer :Renderer2) { }

  ngOnInit()
  {
    //this.backgroundColor=this.defaultColor;
    this.renderer.setStyle(this.eleRef.nativeElement ,'backgroundColor' ,'blue' );
  }
//making hover an element when mouse is pointed to it.mouseenter 2 event
  @HostListener('mouseenter') mouseover(eventDate:Event)
  {
    this.renderer.setStyle(this.eleRef.nativeElement ,'backgroundColor' ,'blue' ); //can use this too
    //this.backgroundColor= this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventDate:Event)
  {
    this.renderer.setStyle(this.eleRef.nativeElement ,'backgroundColor' ,'red' ); // can use this too
    //this.backgroundColor=this.defaultColor;
  }
  

}
