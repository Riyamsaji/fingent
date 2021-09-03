import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationRoutingModule } from './validation-routing.module';
import { ValidationComponent } from './validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    ValidationComponent
  ],
  imports: [
    CommonModule,
    ValidationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule
  ]
})
export class ValidationModule { }
