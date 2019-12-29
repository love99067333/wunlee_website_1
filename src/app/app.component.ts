import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: '首頁 Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: '導覽手冊 Guide',
      url: '/guide',
      icon: 'document'
    },
    {
      title: '活動資訊 Event',
      url: '/event',
      icon: 'calendar'
    }
    ,
    {
      title: '歷史介紹 History',
      url: '/introduction',
      icon: 'book'
    }
    ,
    {
      title: '著名景點 Scenery',
      url: '/map',
      icon: 'map'
    }
    ,
    {
      title: '志工招募 Volunteer',
      url: '/recruit',
      icon: 'person-add'
    }
    ,
    {
      title: '聯絡方式 Contact Us',
      url: '/about',
      icon: 'text'
    },
    {
      title: 'APP下載 Download',
      url: '/download',
      icon: 'logo-android'
    }
    /*{
      title: '景點',
      url: '/list',
      icon: 'list'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
