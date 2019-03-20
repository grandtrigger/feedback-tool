import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


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
        MatFormFieldModule
    ]
})
export class MaterialConfigModule { }
