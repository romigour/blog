import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
// Initialize Firebase
    const config = {
      // apiKey: 'AIzaSyAtQTkJ2ITlZ9B86JybvKy_VgQ44IoHLlg',
      // authDomain: 'blog-ocr-post.firebaseapp.com',
      // databaseURL: 'https://blog-ocr-post.firebaseio.com',
      // projectId: 'blog-ocr-post',
      // storageBucket: '',
      // messagingSenderId: '976487636365'

      apiKey: 'AIzaSyD63JcaDXS2PUksvgt77ibm5Ap5DFrCT8Q',
      authDomain: 'blog-mathilde.firebaseapp.com',
      databaseURL: 'https://blog-mathilde.firebaseio.com',
      projectId: 'blog-mathilde',
      storageBucket: '',
      messagingSenderId: '206049044260',
      appId: '1:206049044260:web:ccd6ff82c633dd2d5235b1',
      measurementId: 'G-1K13S78ELT'
    };
    firebase.initializeApp(config);
  }

}
