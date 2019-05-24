import { Component , OnInit, ConstructorSansProvider } from '@angular/core';
import { ServicesService } from './services.service';

import { Course } from './model/course';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  implements OnInit {


courses: Course[] ;

today: number = Date.now();

price = 4.66;
rate = 0.56;
constructor(private servicesservice: ServicesService ) {}
getCourses(): void {
  this.courses = this.servicesservice.getCourses();
}

ngOnInit() {
  this.getCourses();
}

}

