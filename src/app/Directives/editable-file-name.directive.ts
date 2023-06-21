import {  Directive, ElementRef, HostListener, Input, OnInit,Renderer2,Inject,HostBinding,ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { FileFormat, FileFormatOption} from '../model/global';

import { ScanOptionsService} from '../services/scan-options.service';




@Directive({

  selector: '[editableField]'

})

export class EditableFieldDirective {




  @Input() placeholder: string;

  @Input() additionalText : string;

  @Input() preventDirectiveInit: boolean;

  private inputField: HTMLInputElement | null;

  private buttonElement: HTMLButtonElement;

  //@ViewChild('button') buttonElement: ElementRef<HTMLButtonElement>;




  private defaultText: string;

  private isPlaceholderVisible = true;

  private inputPlaceholder : string;

  selectedFileFormat : FileFormat;

  selectedFileFormatOptions : FileFormatOption;

  anyFileFormat = {from : 'fileFormat'};

  extension : string;

  tempTextValue : string = '';

  private initialized = false;




 

  constructor(

    private elementRef: ElementRef<HTMLInputElement>,

    private scanOptionService : ScanOptionsService,

    private renderer: Renderer2

    ) {}




ngOnInit(){

 

 

  this.inputField = document.querySelector('input[type="text"]');

  if (this.inputField) {

    this.inputField.style.display = 'none';

  }

  if(!this.preventDirectiveInit){





  this.selectedFileFormat = this.scanOptionService.getFileFormat(this.anyFileFormat);

  this.selectedFileFormatOptions = this.selectedFileFormat.options.find(item => item.isDefault === true);

  this.extension = this.selectedFileFormatOptions.title;

  this.extension = this.extension.replace('.','');

  this.defaultText = this.placeholder;

  var newValue : string = '';

  newValue =   this.additionalText ;

  newValue = newValue.replace('{0}', (this.placeholder || ''));

  newValue = newValue.replace('{1}', this.extension);

  //console.log(this.buttonElement);

  this.buttonElement = this.renderer.selectRootElement('.subjectButton');

 

    this.buttonElement.innerText = newValue;console.log(this.buttonElement);

    this.initialized = true;

  }

 




  this.scanOptionService.selectedFileFormatC.subscribe(object =>{

    if(object){

      this.selectedFileFormatOptions = object;

      this.extension = this.selectedFileFormatOptions.title;

      //this.extension = this.extension.replace('.','');

      if(this.inputField.value.includes('.')){

        this.inputField.value = this.inputField.value.substring(0,this.inputField.value.lastIndexOf('.')) + this.extension;

      }

      if(this.buttonElement.innerText.includes('.')){

        this.buttonElement.innerText = this.buttonElement.innerText.substring(0,this.buttonElement.innerText.lastIndexOf('.')) + this.extension;

      }

    }

  })




 

}




  @HostListener('click') onClick() {

    const isButton = this.elementRef.nativeElement.tagName.toLowerCase() === 'button';

    if (isButton) {

      if (this.inputField) {

        this.inputField.style.display = 'inline-block';

        this.inputField.style.boxShadow = 'none';

        this.inputField.focus();

      }

      this.elementRef.nativeElement.style.display = 'none';

      this.elementRef.nativeElement.dispatchEvent(new CustomEvent('clickEvent'));




      var newValue : string = '';

     




    if(this.isPlaceholderVisible){

      this.inputField.value = this.placeholder;

      this.inputPlaceholder = '';

      this.isPlaceholderVisible = true;

    }

    else{

      this.inputField.value = this.tempTextValue;

      this.isPlaceholderVisible = false;

    }

    this.inputField.focus();

    this.inputField.select();




    }

   

  }




  @HostListener('blur')  onBlur() {  //console.log("on blur");

    const isTextbox = this.elementRef.nativeElement.tagName.toLowerCase() === 'input';

    if (isTextbox) {

      this.elementRef.nativeElement.style.display = 'inline-block';

     

      this.buttonElement.innerText = this.inputField.value;




    var enteredValue = this.elementRef.nativeElement.value.trim();

    this.tempTextValue = enteredValue;

    this.extension = this.selectedFileFormatOptions.title;

    this.extension = this.extension.replace('.','');

    newValue =   this.additionalText ;

    newValue = newValue.replace('{1}', this.extension);

    if(enteredValue == this.placeholder){

      this.inputPlaceholder = this.defaultText;

      newValue = newValue.replace('{0}', this.defaultText);

      this.isPlaceholderVisible = true;

      this.inputField.value = newValue;

      this.buttonElement.innerText = newValue;

    }

    else{

      this.inputPlaceholder = '';

      var newValue : string;

      this.inputField.value = '';

         

      newValue = newValue.replace('{0}', enteredValue);

      this.inputField.value =  newValue;

      this.buttonElement.innerText = newValue;console.log('blur :'+this.buttonElement.innerText);

      this.isPlaceholderVisible = false;

    }

    this.inputField.style.display = 'none';

    this.buttonElement.style.display = 'inline-block';

    //this.elementRef.nativeElement.dispatchEvent(new CustomEvent('blurEvent'));

    }

  }





}