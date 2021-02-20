import { Directive, Output,EventEmitter, ElementRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
@Directive({
  selector: '[appPageControl]'
})
export class PageControlDirective {
  scrollEvent;
  div;
  @Output() onScroll = new EventEmitter();
  constructor(public el: ElementRef) {

   this.scrollEvent=fromEvent(el.nativeElement,'scroll').subscribe((res:any)=>{
    if(res.target.scrollTop>10){
      let div=this.el.nativeElement.querySelector('app-header');
      this.div=div.querySelector('section');
      this.div.style.height="70px";
    }
    else{
      let div=this.el.nativeElement.querySelector('app-header');
      this.div=div.querySelector('section');
      this.div.style.removeProperty("height");
      
    }
   })
  }
  
}
