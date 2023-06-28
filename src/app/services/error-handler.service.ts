import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { AppComponent } from '../../app/app.component';
import { GeneralAlertComponent } from '../views/general-alert/general-alert.component';
import { AlertBannerComponent } from '../views/alert-banner/alert-banner.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private modalService: ModalService,appComponent:AppComponent) { }

  parseError(errorSDEName: string): void {
    var localizedString = errorSDEName;
    if (localizedString == null || localizedString.length == 0) {
      localizedString = errorSDEName;
    }
    
    
  }

}
