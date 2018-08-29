import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './values/values.component';
import { SkillsComponent } from './skills/skills.component';
import { FutureComponent } from './future/future.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuizSlideshowComponent } from './quiz-slideshow/quiz-slideshow.component';
import { AutumnSlideshowComponent } from './autumn-slideshow/autumn-slideshow.component';
import { ResumeSlideshowComponent } from './resume-slideshow/resume-slideshow.component';
import { FetcherSlideshowComponent } from './fetcher-slideshow/fetcher-slideshow.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ValuesComponent,
    SkillsComponent,
    FutureComponent,
    ProjectsComponent,
    QuizSlideshowComponent,
    AutumnSlideshowComponent,
    ResumeSlideshowComponent,
    FetcherSlideshowComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
