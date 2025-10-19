import { Routes } from '@angular/router';
import { AttributeDirComponent } from './Directives/attribute-dir/attribute-dir.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirComponent } from './Directives/structural-dir/structural-dir.component';

export const routes: Routes = [

    {
        path: 'attribute-dir',
        component:AttributeDirComponent
    },
    {
        path:'data-binding',
     component:  DataBindingComponent 
    },
    {
        path:'structural-dir',
        component:StructuralDirComponent
    }
];
