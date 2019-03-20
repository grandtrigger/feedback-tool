import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MaterialConfigModule } from './core/modules/material-config.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        MaterialConfigModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
