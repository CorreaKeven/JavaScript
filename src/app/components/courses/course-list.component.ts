import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})


export class CourseListComponent {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {         // OBSERVABLE SÃO ASSINCRONOS.    A REQUISICAÇÃO HTTP ENVELOPOU, RETORNA NA FUNCAO DE CALLBACK NEXT ~~  UTILIZA O SUBSCRIBE 
        this.courseService.retrieveAll().subscribe({
            next: courses => {         //NEXT =  CALLBACK FUNCTION de retorno da aquisição - O METODO DEU CERTO.  RECEBE UM OBJETO ARRAY DE COURSE. RETORNA UMA FUNCAO
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }
    deletebyId(courseId: number): void {
        this.courseService.deletebyId(courseId).subscribe({
            next: () => {
                console.log('Deleted with Sucess');
                this.retrieveAll();
            },
            error: err => console.log('Erro', err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter() {
        return this._filterBy;
    }

}