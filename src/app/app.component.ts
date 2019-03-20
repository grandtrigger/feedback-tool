import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'ft-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    talkList = new Array();

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.getTrainings();
    }

    private getTrainings() {
        this.appService.getTrainings().subscribe(
            result => {
                this.talkList = result;
            }
        );
    }
}
