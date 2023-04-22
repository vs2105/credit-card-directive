import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCssdirective } from './directives/basicscss.directive';
import { AdvanceCssDirective } from './directives/advance-css.directive';
import { LowercaseDirective } from './directives/lowercase.directive';
import { CreditcardDirective } from './directives/creditcard.directive';
import { AadharCardDirective } from './directives/aadhar-card.directive';



@NgModule({
  declarations: [
    AppComponent,
    BasicCssdirective,
    AdvanceCssDirective,
    LowercaseDirective,
    CreditcardDirective,
    AadharCardDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
