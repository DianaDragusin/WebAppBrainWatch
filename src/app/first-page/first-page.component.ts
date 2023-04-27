import { Component,OnInit } from '@angular/core';
import { PatientsService } from '../Services/patients.service';
import { Patients } from '../Models/patients';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { EditPartComponent } from '../edit-part/edit-part.component';
import { DeleteCardComponent } from '../delete-card/delete-card.component';

import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit,AfterViewInit {
  patient = {
    FirstName:'',
    LastName:'',
   
}
patientsfromDB: Patients[] = [];  
formVar=false;
dataSource = new MatTableDataSource<Patients>(this.patientsfromDB);



constructor(private patientsService: PatientsService,private dialog: MatDialog){}
ngOnInit(): void {
 
    this.patientsService.getPatients().subscribe( result =>
    {
      this.patientsfromDB = result;
      this.dataSource.data = result;
    })
  
}
@ViewChild(MatPaginator) paginator!: MatPaginator;


ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
  deleteSafe(patient:Patients)
  {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      data: { patient }
    });
  }

  editPatient(patient:Patients) {
    const dialogRef = this.dialog.open(EditPartComponent, {
      data: { patient }
    });
    
      
  }
 

}
