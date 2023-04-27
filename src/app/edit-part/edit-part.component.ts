import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from '../Services/patients.service';
import { Patients } from '../Models/patients';
@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css']
})
export class EditPartComponent {
  form: FormGroup = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email:['',Validators.required],
    AverageGlucoseLevel: [0, Validators.required],
    Hypertension: [false],
    Married: [false],
    Smokes: [false],
    Age: [0, Validators.required]
  });

  patient:Patients= new Patients;
  constructor(private patientsService: PatientsService,private fb: FormBuilder, private dialogRef: MatDialogRef<EditPartComponent>, @Inject(MAT_DIALOG_DATA) public data: { patient: Patients }) {
    
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      AverageGlucoseLevel: [0, Validators.required],
      Hypertension: [false],
      Married: [false],
      Smokes: [false],
      Age: [0, Validators.required]
    });
   
    this.patient = this.data.patient;
    // Set the form controls to the patient properties
    this.form.patchValue({
      FirstName: this.patient.FirstName,
      LastName: this.patient.LastName,
      Email: this.patient.Email,
      AverageGlucoseLevel: this.patient.AverageGlucoseLevel,
      Hypertension: this.patient.Hypertension,
      Married: this.patient.Married,
      Smokes: this.patient.Smokes,
      Age: this.patient.Age
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {  
    if (this.form.valid) {
      this.patientsService.deletePatient(this.patient);
      console.log(this.form.value);
      const newPatient = this.form.value;
      this.patientsService.addPatients(newPatient);
      this.dialogRef.close();
    }
  }
}
