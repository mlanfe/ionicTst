import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    console.log('=============');
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await Promise.all([
        StatusBar.setStyle({ style: Style.Default }),
        StatusBar.setOverlaysWebView({ overlay: false }),
        StatusBar.setBackgroundColor({
          color: '#e44f26',
        }).catch((err) => {
          console.log(err);
        }),
      ]);


      // await SplashScreen.hide();
    });
  }
}
