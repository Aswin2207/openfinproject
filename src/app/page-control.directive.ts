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
      let section=div.querySelector('section');
      let img=div.querySelector('img');
      section.style.height="75px";
      img.style.height="80px";
      img.style.width="80px";
    }
    else{
      let div=this.el.nativeElement.querySelector('app-header');
      let section=div.querySelector('section');
      let img=div.querySelector('img');
      img.style.height="100px";
      img.style.width="100px";
      section.style.removeProperty("height");
      
    }
   })
  }
  
}
