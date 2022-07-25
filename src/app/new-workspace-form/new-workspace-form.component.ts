import { Component, OnInit } from '@angular/core';

import { Workspace } from '../workspace';

@Component({
  selector: 'app-new-workspace-form',
  templateUrl: './new-workspace-form.component.html',
  styleUrls: ['./new-workspace-form.component.scss']
})
export class NewWorkspaceFormComponent implements OnInit {

  constructor() { }

  departments: string[] = ['Defensie Materieel Organisatie (DMO)', 'Joint IV Commando (JIVC)', 'COMP CTRM', 'ADV&CONSUL', 'Finance & Control', 
    'Bestuur & Bedrijfsvoering', 'Personeel & Organisatie (P&O)', 'Kleding- en Persoonsgebonden Uitrustingbedrijf (KPU)', 'Defensie Munitiebedrijf', 
    'Bedrijfsstoffenbedrijf (DBBB)', 'Defensie Bewakings- en Beveiligingsorganisatie (DBBO)', 'Commandant der Zeemacht in het Caribisch Gebied (CZMCARIB)',
  ]

  subjects = ['', 'Besturen', 'Besturen & Overige ondersteuning', 'Beveiliging', 'Communicatie', 
    'Documentaire Informatievoorziening', 'Facilitair', 'Financiën',
    'Gereedstelling en inzet', 'Evenementen',
  ]

  model = new Workspace(1, '', '', this.subjects[0], '');
  
  view = 'form';
  submitted = false;
  submitSucces = false;

  newNewWorkspaceForm() {
    this.model = new Workspace(1, '', '', '', '');
    this.view = 'form';
  }
  onReview() { this.view = 'review'; }
  backoutReview() { this.view = 'form'; }

  onSubmit() {
    this.view = 'submitting';
    this.submitted = true;
    setTimeout(() => {
      this.view = 'succes';
      this.submitSucces = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
