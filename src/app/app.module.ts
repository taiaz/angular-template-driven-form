import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneValidatorDirective } from './validators/phone-validator.directive';
import { EmailValidatorDirective } from './validators/email.validator.';

@NgModule({
  declarations: [
    AppComponent,
    PhoneValidatorDirective,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
