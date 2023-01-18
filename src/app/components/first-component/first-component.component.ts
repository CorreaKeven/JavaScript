import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
name: string = "Keven Corrêa"
age: number = 28;
job: string = 'Engenheiro Elétrico - Eletrônico'
hobbie: string[] = ['Video Game' , 'Programar' , 'Acampar' , 'Estudar']

veiculo = {
  name: "Lander 250x",
  ano: 2008 

}

  

}
