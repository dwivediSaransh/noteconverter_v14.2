import { Injectable, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { ProgressAlertComponent} from '../views/progress-alert/progress-alert.component'; 
import {AppComponent} from '../app.component';
import { BehaviorSubject, timer,Subject, Observable} from 'rxjs';
import {AppModule} from '../../app/app.module';
import { Overlay,ComponentType} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayRef } from '@angular/cdk/overlay';
import { DialogRef } from '../dialog-ref';
import { DIALOG_DATA } from '../dialog-tokens';



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

    openComponentModal(component: ComponentType<any>)
    : DialogRef {
     // Globally centered position strategy
    const positionStrategy = this.overlay
    .position()
    .global()
    .centerHorizontally()
    .centerVertically();


    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      //backdropClass: 'overlay-backdrop',
      //panelClass: 'overlay-panel',
    });

    // Create dialogRef to return
    const dialogRef = new DialogRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: this.currentValue },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    const componentRef = overlayRef.attach(portal);
    this.componentRef = componentRef;

    return dialogRef;
  }

    closeModal(): void {
      if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
        console.log("close modal service component");
      }
    }
    
  }




