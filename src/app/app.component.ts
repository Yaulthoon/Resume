import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('routerAnimation',[
  transition('* => *', [
  
   query(':enter',
  animate('.6s ease-in-out', keyframes([
  style( {position: 'absolute', left: '50%', opacity: 0}),
  style({opacity: 0.2, left: '40%'}),
  style({opacity: 0.4, left: '30%'}),
  style({opacity: 0.6, left: '20%'}),
  style({opacity: 0.8, left: '10%'}),
  style({opacity: 1, left: '0%'})
	])),  {optional: true})
	
  ])
  ])]
  
})
export class AppComponent {
  title = 'app';
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
