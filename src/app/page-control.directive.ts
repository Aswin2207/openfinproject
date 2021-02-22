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
      let imgdiv=div.querySelector('div');
      section.style.height="70px";
      imgdiv.style.marginTop="15px";
      section.style.background="white";
      img.style.height="80px";
      img.style.width="80px";
    }
    else{
      let div=this.el.nativeElement.querySelector('app-header');
      let section=div.querySelector('section');
      let img=div.querySelector('img');
      let imgdiv=div.querySelector('div');
      img.style.height="100px";
      img.style.width="100px";
      section.style.removeProperty("height");
      section.style.removeProperty("background");
      imgdiv.style.removeProperty("margin-top");
    }
   })
  }
  
}
