import { Injectable } from '@angular/core';
//import {MatDialog,MatDialogRef,DialogPosition} from '@angular/material/dialog';
import { ProgressAlertComponent} from '../views/progress-alert/progress-alert.component'; 
import {AppComponent} from '../app.component';
import { BehaviorSubject, timer} from 'rxjs';
import {AppModule} from '../../app/app.module';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  deviceInformation:any;
  isThirdGenBrowser : boolean = AppModule.isThirdGenBrowser;

  private fromData = new BehaviorSubject<string>('');
  currentValue = this.fromData.asObservable();

  constructor(
   
    public  app : AppComponent    
    ) { }

  
  }

