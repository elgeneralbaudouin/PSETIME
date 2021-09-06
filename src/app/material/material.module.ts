import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, } from '@angular/material/Table';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const materialModules = [
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule


  ],
  exports: [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgMaterialModule { }
