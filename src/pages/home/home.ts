import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HolderPage } from '../holder/holder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  messageInput ='';
  constructor(public navCtrl: NavController) {

  }

 goFunction() {
 	
 	this.navCtrl.push(HolderPage);
  }

}


