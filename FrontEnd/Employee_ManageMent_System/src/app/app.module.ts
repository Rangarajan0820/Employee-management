import {  HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/component/login/login.component';
import { DefaultComponent } from './auth/component/default/default.component';
import { HomeComponent } from './auth/component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormComponent } from './auth/component/form/form.component';
import { ViewComponent } from './auth/component/view/view.component';
import { UserComponent } from './auth/component/user/user.component';
import { SampleComponent } from './auth/component/sample/sample.component';
import { TemplateComponent } from './auth/component/template/template.component';
import { EditComponent } from './auth/component/edit/edit.component';
import { DemoComponent } from './auth/component/demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    HomeComponent,
    FormComponent,
    ViewComponent,
    UserComponent,
    SampleComponent,
    TemplateComponent,
    EditComponent,
    DemoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
