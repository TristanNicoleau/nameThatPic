import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomPage } from "../room/room";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: String;

  constructor(public navCtrl: NavController) {
  }

  runGame() {
    this.navCtrl.push(RoomPage, {
      username:this.username
    })
  }

}
