import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirComponent } from './Directives/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './Directives/attribute-dir/attribute-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,StructuralDirComponent,AttributeDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'V18Tutorial';
}
