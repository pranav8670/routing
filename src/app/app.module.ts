import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './components/about/about.component';

const routes : Routes=[
 {path : '' , redirectTo:'/home' , pathMatch: 'full'},

 {path : 'home' , component : HomeComponent},
 {path : 'about' , component : AboutComponent},
 {path : 'contact' , component : ContactComponent},

 {path : '**' , component : PagenotfoundComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    PagenotfoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
