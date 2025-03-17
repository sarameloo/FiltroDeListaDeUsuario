import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';

// Declarations não é necessário
@NgModule({
  imports: [AngularMaterialModule, FormsModule, CommonModule, PipesModule],
  exports: [UserDetailsComponent, FilterComponent, UsersListComponent],
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],
})
export class ComponentsModule {}
