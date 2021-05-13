import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';





import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { MenuComponent } from './Components/Block/Menu/menu.component';
import { SliderComponent } from './Components/Block/Slider/slider.component';
import { UserComponent } from './Components/Block/User/user.component';

import {TimkiemComponent} from './Components/Block/TimKiem/timkiem.component';
import {KhuVucComponent}  from './Components/Block/KhuVuc/khuvuc.component';





@NgModule({
  declarations: [

    AppComponent,
    MenuComponent,
    SliderComponent,
    UserComponent,
    TimkiemComponent,
    KhuVucComponent
    
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
