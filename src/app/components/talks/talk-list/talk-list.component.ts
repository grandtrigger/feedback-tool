import { Component, OnInit, Input } from '@angular/core';
import { Talk } from 'src/app/core/entities/talk';

@Component({
    selector: 'ft-talk-list',
    templateUrl: './talk-list.component.html',
    styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent implements OnInit {
    @Input('talkList') talkList: Array<Talk>;


    constructor() { }


    ngOnInit() {
    }
}
