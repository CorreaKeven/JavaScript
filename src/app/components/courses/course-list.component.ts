import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})


export class CourseListComponent {

    courses: Course[] = [];

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.  //Add 'implements OnInit' to the class.
               this.courses = [
            {
             id: 1,
             name: 'Angular: Forms',
             imageUrl: 'assets/images/forms.png',
             price: 99.99,
             code: 'XPS-8976',
             duration: 120,
             rating: 5.4 ,
             release:'January, 2, 2023',
             options: ''
            },

            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: 'assets/images/http.png',
                price: 45.99,
                code: 'LKS-1096',
                duration: 80,
                rating: 4.5 ,
                release:'December, 10, 2022',
                options: ''

               }

        ]

    }

}