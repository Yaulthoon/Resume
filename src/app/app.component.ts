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
  
   query(':enter', stagger('300ms', [
  animate('.6s ease-out', keyframes([
  style( {position: 'fixed', opacity: 0.0, transform: 'translateX(100%)'}),
  style({opacity: 0.4, transform: 'translateX(50%)'}),
  style({opacity: .8, transform: 'translateX(25%)'}),
  style({opacity: 1.0, transform: 'translateX(0%)'})
  
	]))]),  {optional: true})
	
  ])
  ])
  ]
  
})
export class AppComponent {
  title = 'app';
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
