import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { HelloComponent } from './hello/hello.component';
import { Lowercase1Pipe } from './lowercase1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    HelloComponent,
    Lowercase1Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
