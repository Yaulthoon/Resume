import { Component, OnInit } from '@angular/core';
import { trigger,style,state,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-resume-slideshow',
  templateUrl: './resume-slideshow.component.html',
  styleUrls: ['./resume-slideshow.component.css'],
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
export class ResumeSlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  state: string = 'small';
  count = new BehaviorSubject<any>(0); 
  resumeMaker = ["assets/resume/resume1.png", "assets/resume/resume2.png", 
	   "assets/resume/resume3.png", "assets/resume/resume4.png"];
  public resume = new BehaviorSubject<any>("assets/resume/resume1.png");
  q = this.resume.asObservable();

  animateMe(count, locate, loadPic) {
	  if(count.value === (locate.length - 1)) {
		  count.next(count.value - (locate.length -1));
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
