import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  id: any;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(public navCtrl: NavController, public afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.itemsCollection = afs.collection<any>('/employees');
    this.items = this.itemsCollection.valueChanges();
  }

  deletePerson() {

  }
}
