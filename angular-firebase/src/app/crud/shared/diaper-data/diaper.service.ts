import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Diaper } from './diaper.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})
export class DiaperService {

    constructor(private db: AngularFirestore) {

    }
    insert(diaper: Diaper) {
        this.db.collection('diaper').add(diaper)
            .then((result: any) => { console.log(result.id); });
    }
    update(diaper: Diaper, key: string) {
        this.db.collection('diaper').doc(`diaper\${key}`).update(diaper)
            .then((result: any) => { console.log(result); })
            .catch(error => console.log(error));
    }

    getAll() {
        return this.db.collection('diaper').snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Diaper;
                    const id = a.payload.doc.id;
                    console.log(id);
                    console.log(data)
                    return { id, ...data };
                })))
    }

    delete(key: string) {
        return this.db.collection('diaper').doc(`diaper\${key}`).delete().then( result => console.log(result));
    }
}
