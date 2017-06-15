import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

/****** NPM ******/
import { CKEditorModule } from 'ng2-ckeditor';


/****** Paginas ******/
import { HomePage } from '../pages/home/home';
import { EditorPage } from '../pages/editor/editor';
import { LoginWikiPage } from '../pages/login-wiki/login-wiki'

/****** Provider ******/
import { MediawikiServiceProvider } from '../providers/mediawiki-service/mediawiki-service';
import { UserServiceProvider } from '../providers/local-bd-service/user/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditorPage,
    LoginWikiPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot({
      name:"walan",
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    CKEditorModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditorPage,
    LoginWikiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediawikiServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
