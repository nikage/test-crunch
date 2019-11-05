import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { LoginComponent }                      from './login/login.component';
import { MatInputModule }                      from '@angular/material/input';
import { MatButtonModule }                     from '@angular/material/button';
import { MatSelectModule }                     from '@angular/material/select';
import { MatRadioModule }                      from '@angular/material/radio';
import { MatCardModule }                       from '@angular/material/card';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService }                         from 'src/app/auth.service';
import { AuthHttpInterceptor }                 from 'src/app/config/auth-http-interceptor';
import { DashboardComponent }                  from './dashboard/dashboard.component';
import { MatGridListModule }                   from '@angular/material/grid-list';
import { MatMenuModule }                       from '@angular/material/menu';
import { MatIconModule }                                           from '@angular/material/icon';
import { LayoutModule }                                            from '@angular/cdk/layout';
import { DatepickerComponent }                                     from './datepicker/datepicker.component';
import { MatDatepicker, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
