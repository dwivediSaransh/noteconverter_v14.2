import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PopupCompComponent} from '../app/views/popup-comp/popup-comp.component';
import {ScanScreenComponent} from '../app/views/scan-screen/scan-screen.component';

const routes: Routes = [
  //{path: 'logs', component: LogViewComponent },
  {path:'popUp',component: PopupCompComponent},
  {path:'scanScreen',component: ScanScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
