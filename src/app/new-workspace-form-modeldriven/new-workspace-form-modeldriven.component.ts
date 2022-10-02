import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-workspace-form-modeldriven',
  templateUrl: './new-workspace-form-modeldriven.component.html',
  styleUrls: ['./new-workspace-form-modeldriven.component.scss']
})
export class NewWorkspaceFormModeldrivenComponent implements OnInit {

  constructor() { }

  departments: string[] = ['Defensie Materieel Organisatie (DMO)', 'Joint IV Commando (JIVC)', 'COMP CTRM', 'ADV&CONSUL', 'Finance & Control', 
    'Bestuur & Bedrijfsvoering', 'Personeel & Organisatie (P&O)', 'Kleding- en Persoonsgebonden Uitrustingbedrijf (KPU)', 'Defensie Munitiebedrijf', 
    'Bedrijfsstoffenbedrijf (DBBB)', 'Defensie Bewakings- en Beveiligingsorganisatie (DBBO)', 'Commandant der Zeemacht in het Caribisch Gebied (CZMCARIB)',
  ]

  newWorkspaceReactive = new FormGroup({
    title: new FormControl(''),
    department: new FormControl(''),
    subject: new FormControl(''),
    creatorEmail: new FormControl(''),
  });

  get title() {
    return this.newWorkspaceReactive.get('title')?.value;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newWorkspaceReactive.value);
  }

  ngOnInit(): void {
  }

}
