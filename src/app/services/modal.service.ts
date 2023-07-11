import { Injectable, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import {AppComponent} from '../app.component';
import { BehaviorSubject, timer,Subject, Observable} from 'rxjs';
import {AppModule} from '../../app/app.module';
import { Overlay,ComponentType} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayRef } from '@angular/cdk/overlay';




@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private overlayRef: OverlayRef;
  private componentRef: ComponentRef<any>;
  deviceInformation:any;
  isThirdGenBrowser : boolean = AppModule.isThirdGenBrowser;

  private fromData = new BehaviorSubject<string>('');
  currentValue = this.fromData.asObservable();

  constructor(
    public app: AppComponent,
    private overlay: Overlay,
    private appRef: ApplicationRef,
    private injector: Injector
    
    ) { }

  
    
  }




