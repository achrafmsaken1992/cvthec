import {NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatDatepickerModule, MatFormFieldModule,
    MatNativeDateModule, MatSelectModule,MatAutocompleteModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule ,MatFormFieldModule],
    exports: [MatAutocompleteModule,CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,MatFormFieldModule]
})
export class CustomMaterialModule { }
