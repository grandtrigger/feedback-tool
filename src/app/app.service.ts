import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, throwError } from 'rxjs';
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
        return from(this.angularFirestore
            .collection<any>('talks')
            .add(talk)
            .then(
                () => {
                    return 'Usuário cadastrado com sucesso';
                },
                err => {
                    return err.message;
                }
            ));
    }
}
