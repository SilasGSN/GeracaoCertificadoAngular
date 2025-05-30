import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css'
})
export class CertificadosFormComponent {

}
