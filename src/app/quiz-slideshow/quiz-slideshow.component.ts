import { Component, OnInit } from '@angular/core';
import { trigger,style,state,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quiz-slideshow',
  templateUrl: './quiz-slideshow.component.html',
  styleUrls: ['./quiz-slideshow.component.css'],
  animations: [
    trigger('slideAnimation', [
		state('void', style({ height: 0 })),
        transition('* => *', animate('750ms ease-out', keyframes([
          style({opacity: 0}),
          style({opacity: .5}),
          style({opacity: 1})
        ]))),
    ]),
  ]
})
export class QuizSlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  console.log(this.count.value);
  }
  
  state: string = 'small';
  count = new BehaviorSubject<any>(0); 
  quizMaker = ["assets/quizMaker/quizMaker1.png", "assets/quizMaker/quizMaker2.png", 
	   "assets/quizMaker/quizMaker3.png", "assets/quizMaker/quizMaker4.png", 
	   "assets/quizMaker/quizMaker5.png", "assets/quizMaker/quizMaker6.png"];
  public quiz = new BehaviorSubject<any>("assets/quizMaker/quizMaker1.png");
  q = this.quiz.asObservable();

  animateMe(count, locate, loadPic) {
	  if(count.value === 5) {
		  count.next(count.value - 5);
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