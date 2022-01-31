import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {PanelModule} from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class LoginModule { }
