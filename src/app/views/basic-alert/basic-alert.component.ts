import { Component,Inject } from '@angular/core';
import { ModalService} from '../../services/modal.service';
import {DialogData,resourceString} from '../../model/global';
import { ResourcestringService} from '../../services/resourcestring.service';

@Component({
  selector: 'app-basic-alert',
  templateUrl: './basic-alert.component.html',
  styleUrls: ['./basic-alert.component.less']
})


export class BasicAlertComponent {
  resourceString : resourceString[];
  title : string = "";
  message : string = "";

  constructor(
    private modalService : ModalService,
    
    private resourceStringService : ResourcestringService,
  )
  {}

  ngOnInit(){
    this.resourceString = this.resourceStringService.getObjStrings();
   
    this.message = this.message.replace('{0}', 'Xerox Note Converter');
  }

  closeModal():void{
  }
}
