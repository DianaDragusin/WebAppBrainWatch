import { Component,OnInit } from '@angular/core';
import { PatientsService } from '../Services/patients.service';
import { Patients } from '../Models/patients';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { EditPartComponent } from '../edit-part/edit-part.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  patient = {
    FirstName:'',
    LastName:'',
    //AverageGlucoseLevel:null,
    //Hypertension:null,
    //Married:null,
    //Smokes:null,
    //Age:null
}

  patientsfromDB: Patients[] = [];
  
  formVar=false;
  AverageGlucoseLevel:number = 0;
  Hypertension:boolean=false;
  Married:boolean=false;
  Smokes:boolean=false;
  Age:number = 0;


  constructor(private patientsService: PatientsService,private dialog: MatDialog){}
  ngOnInit(): void {
   
      this.patientsService.getPatients().subscribe( result =>
      {
        this.patientsfromDB = result;
      })
    
  }
 
 
  addPatient(){
    //this.formVar=true;
    const dialogRef = this.dialog.open(PopupComponent);
    /*
    const body = {
      FirstName: [this.patient.FirstName],
      LastName:[this.patient.LastName]
    }
    let newPatient= {FirstName: body.FirstName,LastName: body.LastName, Age:this.Age,AverageGlucoseLevel: this.AverageGlucoseLevel,Hypertension:this.Hypertension,Married:this.Married,Smokes: this.Smokes}
    
    //let newPatient= {FirstName: this.FirstName, Age:this.Age,LastName: this.LastName,AverageGlucoseLevel: this.AverageGlucoseLevel,Hypertension:this.Hypertension,Married:this.Married,Smokes: this.Smokes}
    this.patientsService.addPatients(newPatient);*/

  }
  deletePatient(patient:Patients) {
    this.patientsService.deletePatient(patient);
      
  }
  editPatient(patient:Patients) {
    const dialogRef = this.dialog.open(EditPartComponent, {
      data: { patient }
    });
    
      
  }
 

}
