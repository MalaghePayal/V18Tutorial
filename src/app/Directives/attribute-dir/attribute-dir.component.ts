import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrls: ['./attribute-dir.component.css']
})
export class AttributeDirComponent {
div1BgColor:string='bg-primary';
div2BgColor:string='bg-success';

num1:string='';
num2:string='';

ischecked:boolean=true;

stateSelected:string='';
addRedClass(){
  this.div1BgColor='bg-danger'
}
addBlueClass(){
  this.div1BgColor='bg-primary'
}

toggleclass()
{
  if(this.div2BgColor=='bg-success')
  {
    this.div2BgColor='bg-danger';
  }
  else{
    this.div2BgColor='bg-success';
  }
}

}
