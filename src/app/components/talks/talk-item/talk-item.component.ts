import { Component, OnInit, Input } from '@angular/core';
import { Talk } from 'src/app/core/entities/talk';

@Component({
    selector: 'ft-talk-item',
    templateUrl: './talk-item.component.html',
    styleUrls: ['./talk-item.component.scss']
})
export class TalkItemComponent implements OnInit {
    @Input('talk') talk: Talk;


    constructor() { }


    ngOnInit() {
    }
}
