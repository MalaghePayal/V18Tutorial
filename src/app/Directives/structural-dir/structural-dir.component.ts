import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

isDiv1Visible:boolean=true;
isDiv2Visible:boolean=true;

num1:string='';
num2:string='';

isChecked:boolean=false;
StateSelected:string='';

cityArray: string []=['Pune','Mumbai','Nagpur','Thane'];
studentList:any[]=[
  {studId:1,name:'Payal',city:'Pune',isActive:false},
  {studId:2,name:'Rita',city:'Katraj',isActive:true},
  {studId:3,name:'Akshata',city:'Rajgurunagar',isActive:false},
  {studId:4,name:'Sonal',city:'Chakan',isActive:true},
]
showDiv1(){
  this.isDiv1Visible=true;
}

hideDiv1()
{
this.isDiv1Visible=false;

}

toggleDiv2(){
  this.isDiv2Visible=!this.isDiv2Visible;
}



}
