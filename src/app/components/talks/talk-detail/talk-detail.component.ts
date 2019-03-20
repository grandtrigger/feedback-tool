import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AppService } from 'src/app/app.service';
import { Talk } from 'src/app/core/entities/talk';


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


    constructor(private formBuilder: FormBuilder, private appService: AppService, private snackBar: MatSnackBar) { }


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

    removeTopic(index: number) {
        this.talkTopics.splice(index, 1);
    }

    onSubmit() {
        if (!this.talkForm.valid) return;

        if (this.action === 'create') {
            const data = this.prepareData();
            this.appService.createTalk(data).subscribe(
                result => {
                    this.cleanUpForm();
                    this.openSnackBar(result);
                }
            );
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

    private openSnackBar(message: string) {
        this.snackBar.open(message, null, {
            duration: 5000,
        });
    }

    private cleanUpForm() {
        this.talkForm.reset();
        this.talkTopics = new Array();
    }
}
