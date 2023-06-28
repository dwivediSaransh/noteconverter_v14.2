import { Component,Inject } from '@angular/core';
import { ModalService} from '../../services/modal.service';
import {DialogDataObject,resourceString} from '../../model/global';
import { ResourcestringService} from '../../services/resourcestring.service';

@Component({
  selector: 'app-general-alert',
  templateUrl: './general-alert.component.html',
  styleUrls: ['./general-alert.component.less']
})
export class GeneralAlertComponent {

  button1Classes : string;
  button2Classes : string;
  button1Text : string;
  button2Text : string;
  resourceString : resourceString[];

  constructor(
    private modalService : ModalService,

 
    private resourceStringService : ResourcestringService,
  )
  {}

  ngOnInit(){
    
    this.resourceString = this.resourceStringService.getObjStrings();
   
    this.button1Text = this.resourceString[this.button1Text];
    this.button2Text = this.resourceString[this.button2Text];
    
    
  }

  

  
  closeModal():void{
    }
  }