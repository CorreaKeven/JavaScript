import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = 'Keven Corrêa'
  userName = 'Aleixa';

  userData = {
    email: 'aleixa.francielle@email.com',
    role: 'User'
  }

  userPet = {
    raca :"Vira lata",
    nome : "Trovão",
    idade : "2 anos"
  }
  
  
  title = 'Project';

}
