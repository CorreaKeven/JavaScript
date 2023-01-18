import { Component,Input } from '@angular/core'; // INPUT  - adicionado para herdar dados de um componente pai

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
@Input() name:string ="";   // herdando dados do componente pai
@Input() userData!: {email:string , role:string};
@Input() userPet!: {raca:string , nome:string , idade:string};


}
