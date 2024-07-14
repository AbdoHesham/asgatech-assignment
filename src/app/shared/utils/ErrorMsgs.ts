import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorTooltipService {
  GetErrortooltip(Input, ctrlLabel = 'Field', minValue?, maxValue?, maxSize?,maxCount? ) {
    let tooltip = '';
    //maxLengthArray
    //maxFileSize
    if (Input?.errors && Input?.touched) {
      if (Input.errors.required) tooltip += `\n${ctrlLabel} ${'is required'} \n`;

      if (Input.errors.maxlength)
        tooltip += `\n${ctrlLabel} ${'Exceed max Length'}  ${maxValue}\n`;
      if (Input.errors.minlength)
        tooltip += `\n${ctrlLabel} ${'less than min'}\n`;
      if (Input.errors.min && minValue == null)
        tooltip += `\n${ctrlLabel} ${'less than min'}\n`;

      if (Input.errors.min && minValue != null)
        tooltip += `\n${ctrlLabel} ${'Minimum  is'}   ${minValue}  \n`;

      if (Input.errors.max && maxValue != null)
        tooltip += `\n${ctrlLabel} ${'Maximum'}  ${maxValue}  \n`;

      if (Input.errors.pattern)
        tooltip += `\n${ctrlLabel} ${'Invalid Format'}  \n`;

      if (Input.errors.email)
        tooltip += `\n${ctrlLabel} ${'Not in Email Format'}  \n`;
      
      if (Input.errors.maxFileSize)
        tooltip += `\n${ctrlLabel} ${'Excced Maximum file size'}   \n`;

      if (Input.errors.maxFileSize1M)
        tooltip += `\n${ctrlLabel} ${'Maximum 1 MB'}  \n`;
      if (Input.errors.maxFileSize3M)
        tooltip += `\n${ctrlLabel} ${'Maximum 3 MB'}  \n`;

      if (Input.errors.ageRange)
        tooltip += `\n${ctrlLabel} ${'accept ages between 22 and 100'}    \n`;
      if (Input.errors.extentionError)
        tooltip += `\n${ctrlLabel} ${'Invalid Extension'}   \n`;

      if (Input.errors.lessThanStartOrignError)
        tooltip += `\n${ctrlLabel} ${'should be greater than Original Start date'}  \n`;
      if (Input.errors.lessThanOrignError)
        tooltip += `\n${ctrlLabel} ${'should be greater than Original Schedule End date'}  \n`;
      if (Input.errors.greaterThanOrignError)
        tooltip += `\n${ctrlLabel} ${'should be less than Original Schedule End date'}  \n`;

      if (Input.errors.duplicated) {
        tooltip += `\n${ctrlLabel} ${
          '' + 'Already exists for this provider'
        }    \n`;
      }

      if (Input.errors.GpsErrorMsg) {
        tooltip += `\n${ctrlLabel} ${'GpsErrorMsg'}  \n`;
      }
      // if(Input.errors.RangeError){
      //   tooltip += `\n${ctrlLabel} must be greater than ${secctrlLabel}  \n`;

      // }
    }
     if (Input?.errors){
      if (Input.errors.maxLengthArray){
        tooltip += `\n${ctrlLabel} ${'Excced Maximum file Count'} ${maxCount} \n`;}
        if (Input.errors.maxFileSize){
          tooltip += `\n${ctrlLabel} ${'Excced Maximum file size'} ${maxSize} \n`;}
   
    }

    return tooltip;
  }

  
}



