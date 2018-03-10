import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import Unsplash, { toJson } from 'unsplash-js';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {
  username: string;
  pictureUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get('username');
    const unsplash = new Unsplash({
      applicationId: "2b76b18c34af9c745298d947e9baf7fc524a974b66f7d1f7e81d9792a4daa8b1",
      secret: "4746b6fbf55cb49a8deb6c7cfa56aff4ce50e6ba409e33960f516c12da1fe257",
      callbackUrl: "http://localhost:8100"
    });

    unsplash.photos.getRandomPhoto()
      .then(toJson)
      .then(json => {
        console.log(json);
        this.pictureUrl = json.urls.full;
      });
  }

}
