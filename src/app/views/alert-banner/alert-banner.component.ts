import { Component,Inject } from '@angular/core';
import { ModalService} from '../../services/modal.service';
import {DialogData} from '../../model/global';

@Component({
  selector: 'app-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.less']
})
export class AlertBannerComponent {

  constructor(
    private modalService : ModalService
    
  
  )
  {}

  closeModal():void{
    //this.modalService.closeModal();
  }
}
