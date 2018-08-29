import { Component, OnInit } from '@angular/core';
import { trigger,style,state,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-fetcher-slideshow',
  templateUrl: './fetcher-slideshow.component.html',
  styleUrls: ['./fetcher-slideshow.component.css'],
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
export class FetcherSlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  state: string = 'small';
  count = new BehaviorSubject<any>(0); 
  fetcherQuest = ["assets/fetcherQuest/fetcherQuest1.png", "assets/fetcherQuest/fetcherQuest2.png", 
	   "assets/fetcherQuest/fetcherQuest3.png", "assets/fetcherQuest/fetcherQuest4.png", 
	   "assets/fetcherQuest/fetcherQuest5.png", "assets/fetcherQuest/fetcherQuest6.png"];
  public fetcher = new BehaviorSubject<any>("assets/fetcherQuest/fetcherQuest1.png");

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
