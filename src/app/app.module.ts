import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TradeInfoTableComponent } from './trade-info-table/trade-info-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';  
import { MatButtonModule } from  '@angular/material/button';
import { MatListModule } from  '@angular/material/list';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatIconModule } from  '@angular/material/icon';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { 
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
  IgxToggleModule,
  IgxNavbarModule,
  IgxGridModule
 } from "igniteui-angular";
import { FarmerEditComponent } from './farmer-edit/farmer-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { MatStepperModule } from '@angular/material/stepper';
// import { AgmCoreModule } from '@agm/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TradeInfoTableComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    Dashboard2Component,
    FarmerEditComponent,
  ],
  entryComponents: [FarmerEditComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    IgxButtonModule,
		IgxIconModule,
		IgxLayoutModule,
		IgxNavigationDrawerModule,
		IgxRippleModule,
		IgxToggleModule,
    IgxNavbarModule,
    IgxGridModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    GooglePlaceModule,
    MatSelectModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCjixbVpbpMv0WgmLlNmAN_r0rg88P45o0',
    //   libraries: ['places']
    // })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
