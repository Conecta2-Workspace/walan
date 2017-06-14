import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';


/****** NPM ******/
import { CKEditorModule } from 'ng2-ckeditor';


/****** Paginas ******/
import { HomePage } from '../pages/home/home';
import { EditorPage } from '../pages/editor/editor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CKEditorModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
