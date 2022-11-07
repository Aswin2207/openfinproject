import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { MainModule } from './main/modules/main.module';
import { SharedModule } from './shared/views/modules/shared/shared.module';
import { AutodeskViewerComponent } from './autodesk-viewer/autodesk-viewer.component'; 
import { ViewerModule } from 'ng2-adsk-forge-viewer';

@NgModule({
  declarations: [
    AppComponent,
    AutodeskViewerComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
    MainModule,
    BrowserAnimationsModule,
    NgbModule,
    ViewerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
