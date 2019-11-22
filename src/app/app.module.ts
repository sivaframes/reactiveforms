import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import {HttpClientModule} from "@angular/common/http";
import {checkName } from "../app/common/namevalidator.directive";
import { SampledirectorDirective } from './sampledirector.directive';
import { SamplecomponenetComponent } from './samplecomponenet/samplecomponenet.component';
import { SampletwoDirective } from './sampletwo.directive'
@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    checkName,
    SampledirectorDirective,
    SamplecomponenetComponent,
    SampletwoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
