import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  skillList = ['HTML', 'CSS with RWD', 'Javascript', 'XML structure', 'Familiar with AngularJs', 
  'Ajax for Http calls', 'Angular with CLI', 'Constructing SQL queries', 'Familiar with Node.js', 
  'MySQL and its Node npm'];

}
