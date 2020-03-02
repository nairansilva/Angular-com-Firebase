import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Diaper } from './diaper.model';


@Injectable({
    providedIn: 'root'
})
export class DiaperDataService {
    private diaperSource = new BehaviorSubject({ diaper: null, key: ''});

    currentDiaper = this.diaperSource.asObservable();

    constructor(){ }

    changeDiaper(diaper: Diaper, key: string){
        this.diaperSource.next({diaper: diaper, key: key});
    }
}
