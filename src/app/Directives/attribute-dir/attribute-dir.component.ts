import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
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
customStyle:any= {
  'background-color':'blue',
  'fontWeight':'bold',
  'fontSize':'20px',
  'height':'200px',
  'width':'200px',
  'color':'white',
  'border-radius':'50%'
}

studentList:any[]=[
  {studId:1,name:'Payal',totalmarks:23,city:'Pune',gender:'Female',isActive:true},
  {studId:3,name:'Rita',totalmarks:33,city:'Rajgurunagar',gender:'Female',isActive:true},
  {studId:4,name:'Akshata',totalmarks:67,city:'Chakan',gender:'Female',isActive:true},
  {studId:2,name:'Pooja',totalmarks:50,city:'Katraj',gender:'male',isActive:false},

]


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
