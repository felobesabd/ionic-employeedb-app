import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";

/**
 * Generated class for the AddEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {

  employee: AngularFirestoreCollection<any>;

  name: string = '';
  lName: string =  '';
  age:  string = '';
  dept:  string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public db: AngularFirestore,
              public afAuth: AngularFireAuth)
  {
    this.employee = db.collection('/employees');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

  createPerson(name: string, lName: string, age: string, dept: string) {
    console.log(name, lName, age, dept)
    this.employee.add({
      name: name,
      lName: lName,
      age: age,
      dept: dept
    }).then(newPer => {
      this.navCtrl.push(HomePage).then(r => console.log(r))
      console.log(newPer)
    }, error => {console.log(error)})
    console.log(this.employee)
  }
}
