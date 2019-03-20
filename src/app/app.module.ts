import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialConfigModule } from './core/modules/material-config.module';
import { AppService } from './app.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        AngularFireModule.initializeApp(environment.firebase),

        MaterialConfigModule,
    ],
    providers: [AppService, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule { }
