import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  dataCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.dataCollection = firestore.collection<any>("documentos");
  }

  getPlantas(): any {
    return this.dataCollection.valueChanges()
  }
}
