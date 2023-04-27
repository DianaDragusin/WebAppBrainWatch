import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, query, where} from '@angular/fire/firestore';
import { Patients } from '../Models/patients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patientsCollection = collection(this.fs, 'Patients');

  constructor(private fs: Firestore) { }

  getPatients(): Observable <Patients []> {
    const myCollection: any = collection(this.fs, 'Patients')
    return collectionData(myCollection);
  }
  addPatients(patient:Patients)
  {
    const myCollection = collection(this.fs, 'Patients')
    addDoc(myCollection,patient);
  }
  async deletePatient(patient:Patients) {
    const myCollection = collection(this.fs, 'Patients');
    const querySnapshot = await getDocs(myCollection);
  
    querySnapshot.forEach(async (doc) => {
      const docData = doc.data();
      if (
        docData['FirstName'] === patient.FirstName &&
        docData['LastName'] === patient.LastName &&
        docData['Email'] === patient.Email &&
        docData['Age'] === patient.Age &&
        docData['Hypertension'] === patient.Hypertension &&
        docData['Married'] === patient.Married &&
        docData['Smokes'] === patient.Smokes
      ) {
        await deleteDoc(doc.ref);
        console.log('Patient succesfully deleted!');
      }
    });
  }

  async editPatient(patient:Patients) {
    const myCollection = collection(this.fs, 'Patients');
    const querySnapshot = await getDocs(myCollection);
  
    querySnapshot.forEach(async (doc) => {
      const docData = doc.data();
      if (
        docData['FirstName'] === patient.FirstName &&
        docData['LastName'] === patient.LastName &&
        docData['Email'] === patient.Email &&
        docData['Age'] === patient.Age &&
        docData['Hypertension'] === patient.Hypertension &&
        docData['Married'] === patient.Married &&
        docData['Smokes'] === patient.Smokes
      ) {
        await deleteDoc(doc.ref);
        console.log('Patient succesfully deleted!');
      }
    });
  }

  
  
   /* 
   deletePatient2(patient:Patients): 
   {
      const myCollection = collection(this.fs, 'Patients')
     deleteDoc(myCollection,patient);
    const q = query(this.patientsCollection, where('email', '==', email));
    
    return getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref).then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      });
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    }); */
  
  
}
