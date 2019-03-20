import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { shareReplay } from 'rxjs/operators';


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
}
