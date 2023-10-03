import { Component } from '@angular/core';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.scss']
})
export class MyfirstcomponentComponent {
showElement=false;
onClick(){
   this.showElement=!this.showElement;
}

}
