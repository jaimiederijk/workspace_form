import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ListCheckValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const departments: string[] = ['Defensie Materieel Organisatie (DMO)', 'Joint IV Commando (JIVC)', 'COMP CTRM', 'ADV&CONSUL', 'Finance & Control', 
      'Bestuur & Bedrijfsvoering', 'Personeel & Organisatie (P&O)', 'Kleding- en Persoonsgebonden Uitrustingbedrijf (KPU)', 'Defensie Munitiebedrijf', 
      'Bedrijfsstoffenbedrijf (DBBB)', 'Defensie Bewakings- en Beveiligingsorganisatie (DBBO)', 'Commandant der Zeemacht in het Caribisch Gebied (CZMCARIB)',
    ]
    const match = departments.find(element => element === control.value);

    return !match ? {listCheck: {value: control.value}} : null;
  };
}


@Directive({
  selector: '[appListCheck]',
  providers: [{provide: NG_VALIDATORS, useExisting: ListCheckDirective, multi: true}]
})
export class ListCheckDirective implements Validator {
  @Input('appListCheck') listCheck = '';


  validate(control: AbstractControl): ValidationErrors | null {
    return this.listCheck ? ListCheckValidator()(control)
                              : null;
  }

}
