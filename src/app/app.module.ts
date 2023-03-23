import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDataComponent } from './shared/table-data/table-data.component';
import { CustomreportsComponent } from './customreports/customreports.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { GraphDataComponent } from './shared/graph-data/graph-data.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { ApplicationoverviewComponent } from './shared/applicationoverview/applicationoverview.component';
import { RegiondataComponent } from './regiondata/regiondata.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    CustomreportsComponent,
    GraphDataComponent,
    ApplicationoverviewComponent,
    RegiondataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
