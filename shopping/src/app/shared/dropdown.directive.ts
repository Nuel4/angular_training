import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]',
})
export class DropdownDirective
{
  @HostBinding('class.open') isOpen =false; 
   @HostListener('click') toggleOpen()  //used to listen to event clicking
   {
       this.isOpen= !this.isOpen;
   }

}