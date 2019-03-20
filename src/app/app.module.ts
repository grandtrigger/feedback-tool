import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { TalkDetailComponent } from './components/talks/talk-detail/talk-detail.component';
import { TalkItemComponent } from './components/talks/talk-item/talk-item.component';
import { TalkListComponent } from './components/talks/talk-list/talk-list.component';
import { MaterialConfigModule } from './core/modules/material-config.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TalkListComponent,
        TalkDetailComponent,
        TalkItemComponent,
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
