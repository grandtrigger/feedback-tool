import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        MatListModule,
        MatSnackBarModule
    ]
})
export class MaterialConfigModule { }
