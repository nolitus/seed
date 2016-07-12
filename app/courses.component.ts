import {Component} from 'angular2/core'
import {CourseService} from './course.service'


@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title1}}    
        <ul>
           <li *ngFor="#course of courses">
           {{ course }}
           </li>
        </ul>
        
        `,
        providers: [CourseService]
      

})
export class CoursesComponent {
    title1 = "The tile of courses page";

    courses;


    constructor(courseService:CourseService){
      this.courses = courseService.getCourses();
    

    }
}