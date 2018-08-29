import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { QuizSlideshowComponent } from '../quiz-slideshow/quiz-slideshow.component';
import { AutumnSlideshowComponent } from '../autumn-slideshow/autumn-slideshow.component';
import { ResumeSlideshowComponent } from '../resume-slideshow/resume-slideshow.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideAnimation', [
		state('void', style({ height: 0 })),
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),
  ]
})
  
	
export class ProjectsComponent implements OnInit {
	
  constructor() {
  }

  ngOnInit() {
	  console.log(this.quizMakerCount);
	  
  }
  
  ngOnDestroy() {
	  clearInterval(this.interval);
	  console.log("successful clear");
  }
  
  public quiz = new BehaviorSubject<any>("assets/quizMaker1.png");
  q = this.quiz.asObservable();
  
  state: string = "small";
  autumnFall = false;
  quizMakers = false;
  resume = false;
  fetcherQuest = false;
  
  toggleHideShow(project) {
	  if (this[project] === false) {
		  this[project] = true;
	  } else {
		  this[project] = false;
	  }
  }
  
  quizMakerCount: number = 1; 
  interval = 0;
  quizMaker = ["assets/quizMaker1.png", "assets/quizMaker2.png", 
	   "assets/quizMaker3.png", "assets/quizMaker4.png", "assets/quizMaker5.png", 
		"assets/quizMaker6.png"];
 
  
  transition (quiz, quizMakerCount, quizMaker) {
	  
	   this.interval = setInterval(function() {
			if (quizMakerCount === 6) {
				quizMakerCount = 0;
				var test = (quizMaker[quizMakerCount]);
				this.state = (this.state === 'small' ? 'large' : 'small');
				console.log(this.state);
				quiz.next(test);
			}
			var test = (quizMaker[quizMakerCount]);
			console.log(quizMakerCount);
			this.state = (this.state === 'small' ? 'large' : 'small');
			quizMakerCount++;
			console.log(state);
			quiz.next(test);
		}, 5000);
		
	}
	
	animateMe(count, locate, loadPic) {
	  if(count.value === 6) {
		  count.next(count.value - 6);
		  console.log(count.value);
		  this.state = (this.state === 'small' ? 'large' : 'small');
		  var newer = locate[count.value];
		  loadPic.next(newer);
		  return;
	  } 
	  count.next(count.value + 1);
	  this.state = (this.state === 'small' ? 'large' : 'small');
	  console.log(this.state);
	  var newer = locate[count.value];
	  console.log(count.value);
	  loadPic.next(newer);
	 
  }

}