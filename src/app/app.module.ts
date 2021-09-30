import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostComponent } from './Components/post/post.component';
import { AllPostsComponent} from './Components/all-posts/all-posts.component';
import {SinglePostComponent } from './Components/single-post/single-post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  PostComponent,
                  AllPostsComponent,
                  SinglePostComponent,
                 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
