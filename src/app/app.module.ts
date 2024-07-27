import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

const firebase = {
  apiKey: 'AIzaSyCnsFjq_v5rgK_o9ZBbHMF_ETkNYVelfx0',
  authDomain: 'jtest-963e6.firebaseapp.com',
  projectId: 'jtest-963e6',
  storageBucket: 'jtest-963e6.appspot.com',
  messagingSenderId: '12528227861',
  appId: '1:12528227861:web:3d7986bdb795065a95e01c',
  measurementId: 'G-1V7XQYL3Y5',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(firebase)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
