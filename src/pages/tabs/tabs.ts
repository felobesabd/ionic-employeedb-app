import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {AddEmployeePage} from "../add-employee/add-employee";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddEmployeePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
