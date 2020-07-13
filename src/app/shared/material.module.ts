import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatInputModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

const modules: Array<any> = [MatProgressSpinnerModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
