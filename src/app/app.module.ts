import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
// import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DatePipeDirective } from './date-pipe.directive';


@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    UserComponent,
    HighlightDirective,
    DatePipeDirective,
    // RepoDetailsComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
