import { Component, OnInit } from '@angular/core';
import { trigger,style,state,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-autumn-slideshow',
  templateUrl: './autumn-slideshow.component.html',
  styleUrls: ['./autumn-slideshow.component.css'],
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
export class AutumnSlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  state: string = 'small';
  count = new BehaviorSubject<any>(0); 
  autumnFall = ["assets/autumnFall/autumnFall1.png", "assets/autumnFall/autumnFall2.png", 
	   "assets/autumnFall/autumnFall3.png", "assets/autumnFall/autumnFall4.png", 
	   "assets/autumnFall/autumnFall5.png", "assets/autumnFall/autumnFall6.png"];
  public autumn = new BehaviorSubject<any>("assets/autumnFall/autumnFall1.png");
  q = this.autumn.asObservable();

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
