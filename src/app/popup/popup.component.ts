import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from '../Services/patients.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

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

  constructor(private patientsService: PatientsService,private fb: FormBuilder, private dialogRef: MatDialogRef<PopupComponent>) {}


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
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      const newPatient = this.form.value;
      this.patientsService.addPatients(newPatient);
      this.dialogRef.close();
    }
  }
}
