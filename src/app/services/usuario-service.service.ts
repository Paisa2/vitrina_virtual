import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


 @Injectable({
   providedIn: 'root'
 })
export class UsuarioServiceService {

  constructor(private firestore: AngularFirestore) {

  }

  getUsers(): any{
    return this.firestore.collection('admin').snapshotChanges();
  }

  createUsers(admis: any): any{
    this.firestore.collection('admin').add(admis);
  }

  deleteUser(id: any): any{
    this.firestore.collection('admin').doc(id).delete();
  }
}
