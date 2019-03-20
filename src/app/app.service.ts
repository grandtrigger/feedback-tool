import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, throwError } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Talk } from './core/entities/talk';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private angularFirestore: AngularFirestore) { }


    getTrainings() {
        return this.angularFirestore
            .collection<any>('talks')
            .valueChanges()
            .pipe(
                shareReplay(1)
            );
    }

    createTalk(talk: Talk) {
        return this.angularFirestore
            .collection<any>('talks')
            .add(talk)
            .then(
                result => { },
                err => {
                    throwError(err.message);
                }
            );
    }
}
