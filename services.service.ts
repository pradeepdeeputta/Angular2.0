import { Injectable } from '@angular/core';
import { COURSES } from './db-data';
import { Course} from './model/course';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor() {

  }
  getCourses(): Course[] {
    return COURSES;

  }

}
