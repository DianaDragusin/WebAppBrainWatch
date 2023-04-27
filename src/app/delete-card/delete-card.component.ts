import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from '../Services/patients.service';
import { Patients } from '../Models/patients';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent {
  patient:Patients= new Patients;
  showCard=true;

  constructor(private patientsService: PatientsService,private fb: FormBuilder, private dialogRef: MatDialogRef<DeleteCardComponent>, @Inject(MAT_DIALOG_DATA) public data: { patient: Patients }){}
  
  ngOnInit(): void {
    this.patient = this.data.patient;
  }

  deletePatient() {
    
    this.patientsService.deletePatient(this.patient);
    this.showCard = false;
      
  }
  exit(){
    this.showCard = false;
  }


  
}
