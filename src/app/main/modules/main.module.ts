import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionFlipCardsComponent } from 'src/app/shared/views/section-flip-cards/section-flip-cards.component';
import { MainLayoutComponent } from 'src/app/shared/layouts/main-layout/main-layout.component'; 
import { SharedModule } from 'src/app/shared/views/modules/shared/shared.module'; 
import { FooterComponent } from 'src/app/shared/views/footer/footer.component';
import { HomeBannerComponent } from 'src/app/components/pages/home-banner/home-banner.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeBannerComponent,
    SectionFlipCardsComponent, 
    FooterComponent
  ],
  imports: [
    SharedModule,
    CommonModule, 
  ]
})
export class MainModule { }
