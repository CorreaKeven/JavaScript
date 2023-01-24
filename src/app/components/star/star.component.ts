import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() 
  rating: number = 0;          //torna a variavel elegivel a receber informação
  starWidth: number;
  starValid: boolean;

ngOnChanges(): void {

this.starWidth= this.rating * 74 / 5;

     if(this.starWidth == 0){
      this.starValid= false;
     }else this.starValid=true;
}

}
