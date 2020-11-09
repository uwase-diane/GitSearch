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

import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    UserComponent,
    HighlightDirective,

    DateCountPipe,
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
