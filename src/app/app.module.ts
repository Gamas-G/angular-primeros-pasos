import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      DbzModule
    ],
    exports: [
      AppComponent
    ],
    bootstrap:[
      AppComponent
    ]
})
export class AppModule { }
