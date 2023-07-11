import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { AppComponent } from '../../app/app.component';


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
