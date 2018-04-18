import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './values/values.component';
import { SkillsComponent } from './skills/skills.component';
import { FutureComponent } from './future/future.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [

{
	path: '',
	component: AboutComponent,
	data: { animation: "''" }
},

{
	path: 'values',
	component: ValuesComponent,
	data: { animation: "values" }
},

{
	path: 'skills',
	component: SkillsComponent,
	data: { animation: "skills" }
},

{
	path: 'future',
	component: FutureComponent,
	data: { animation: "future" }
},

{
	path: 'projects',
	component: ProjectsComponent,
	data: { animation: "projects" }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }