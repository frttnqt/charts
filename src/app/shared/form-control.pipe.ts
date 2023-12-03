import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'formControl',
  standalone: true,
})
export class FormControlPipe implements PipeTransform {
  public transform(value: AbstractControl): FormControl {
    return value as FormControl;
  }
}