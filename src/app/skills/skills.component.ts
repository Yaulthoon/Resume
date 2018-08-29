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
  
  skillList = ['HTML', 'CSS3', 'Javascript', 'XML', 'JSON', 'TypeScript', 
  'Ajax', 'Angular 5/6', 'SQL', 'MongoDB', 'Express', 'Mongoose', 'Node.js'];

}
