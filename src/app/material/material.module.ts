import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatDatepickerModule, MatFormFieldModule,
    MatNativeDateModule, MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule ,MatFormFieldModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,MatFormFieldModule]
})
export class CustomMaterialModule { }
