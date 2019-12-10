import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {MatInputModule, MatSelectModule} from '@angular/material';
const modules: Array<any> = [MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatInputModule];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
