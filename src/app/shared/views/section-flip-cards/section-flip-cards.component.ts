import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-flip-cards',
  templateUrl: './section-flip-cards.component.html',
  styleUrls: ['./section-flip-cards.component.css']
})
export class SectionFlipCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openPdf(){
    window.open("assets/demo.pdf", '_blank');
  }
}
