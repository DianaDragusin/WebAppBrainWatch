import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstPageComponent } from './first-page/first-page.component';
import {config} from './config'
import {FirebaseAppModule, initializeApp,provideFirebaseApp} from '@angular/fire/app'
import {FirestoreModule} from '@angular/fire/firestore'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { EditPartComponent } from './edit-part/edit-part.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    PopupComponent,
    EditPartComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseAppModule,
    FirestoreModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
