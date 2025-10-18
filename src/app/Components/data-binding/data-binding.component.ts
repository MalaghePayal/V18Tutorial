import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  courseName:string="Angular 18";
  rollNumber:Number=7;
  isIndian:boolean=true;
  currentDate:Date=new Date();
  stateName:string="Maharashtra";

firstName = signal("Payal Malaghe");

  showAlert(message:string)
  {
    alert(message)
  }

}
