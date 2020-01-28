import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
<<<<<<< HEAD
import { ServersComponent } from './servers/servers/servers.component';
=======
>>>>>>> 521255ab8ea626981c3b344321b34d0e8e6f1fca

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ServerComponent,
    ServersComponent
=======
    ServerComponent
>>>>>>> 521255ab8ea626981c3b344321b34d0e8e6f1fca
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
