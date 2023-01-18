import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
size = 40;   ///propriedades do componente.
font = 'arial';
color = 'red';

classes = ['green-tittle','small-tittle'];


}
