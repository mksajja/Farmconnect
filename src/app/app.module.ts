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


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TradeInfoTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    Ng2SmartTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
