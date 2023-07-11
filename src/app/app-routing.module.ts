import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScanScreenComponent} from '../app/views/scan-screen/scan-screen.component';

const routes: Routes = [
  {path:'*',component: ScanScreenComponent},
  {path:'scanScreen',component: ScanScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
