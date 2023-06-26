import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { MatDialogRef } from '@angular/material/dialog';
import { ModalService} from '../../services/modal.service';
import { environment } from '../../../environments/environment'
import { ProgressAlertComponent } from '../progress-alert/progress-alert.component';
import { ResourcestringService} from '../../services/resourcestring.service';
import { resourceString} from '../../model/global';
import { LogService } from '../../services/log.service';
import smoothscroll from 'smoothscroll-polyfill';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.less']
})
export class PrivacyPolicyComponent implements OnInit {

  privacyPolicy : string = '';
  showVersion: string = '';
  env = environment;
  resourceString : resourceString[];
  //declare smoothscroll : any;

  constructor(
    private http: HttpClient,
    private modalService : ModalService,
    
    private resourceStringService : ResourcestringService,
    private  logService: LogService,
    ){}

  ngOnInit(): void {
    
    
    const url = this.env.privacyPolicyUrl;
    //this.smoothscroll.polyfill();
    smoothscroll.polyfill();
   
    const element = document.getElementById('privacyContent');
    
    element.scrollIntoView({behavior : 'smooth'});
    //alert(element.innerHTML);
    this.http.get(url, {responseType:'text'})
      .subscribe({
          next:(response) => {
          this.privacyPolicy = (response as string);
          //this.showVersion = this.resourceString["VERSION"];
          
        },
        error:(error) => {
          this.logService.trackTrace("inside privacy policy error"+error);
          this.showVersion = 'v1.0'; //this.strings.VERSION
          
          //this.modalService.showGeneralError(error);
        }
    });

    }
      
    closeModal():void{
      
    }

    private disableLinks(): void {
      const links = document.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        links[i].style.pointerEvents = 'none';
      }
    }
  
}
  


