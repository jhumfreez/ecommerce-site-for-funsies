import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app.routing.module';
import { PriceSummaryComponent } from './price-summary/price-summary.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';
// import { MatIconRegistry } from '@angular/material/icon';
@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  declarations: [
    AppComponent,
    PriceSummaryComponent,
    NavPanelComponent,
    ProgressStepperComponent,
    HeaderPanelComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
