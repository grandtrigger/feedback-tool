import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Talk } from 'src/app/core/entities/talk';
import { AppService } from 'src/app/app.service';


@Component({
    selector: 'ft-talk-detail',
    templateUrl: './talk-detail.component.html',
    styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {
    @Input('action') action: string = 'create';

    talkForm: FormGroup;
    talkTopics: Array<string> = new Array();

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];


    constructor(private formBuilder: FormBuilder, private appService: AppService) { }


    ngOnInit() {
        this.createTalkForm();
    }

    addTopic(e: any) {
        const input = e.input;
        const value = e.value;

        if ((value || '').trim()) {
            this.talkTopics.push(value.trim());
        }

        if (input) {
            input.value = '';
        }
    }

    removeTopic(topic: string) {

    }

    onSubmit() {
        if (!this.talkForm.valid) return;

        if (this.action === 'create') {
            const data = this.prepareData();
            this.appService.createTalk(data);
        }
    }

    private createTalkForm() {
        this.talkForm = this.formBuilder.group({
            theme: ['', Validators.compose([Validators.required])],
            speaker: ['', Validators.compose([Validators.required])],
        });
    }

    private prepareData(): Talk {
        return {
            ...this.talkForm.value,
            dateTime: new Date(),
            topics: this.talkTopics
        }
    }
}
