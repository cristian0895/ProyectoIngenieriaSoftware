import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//variables de entorno
import {environment} from '../environments/environment';
//firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import {UsuarioService} from './services/usuario.service';
import { AddUsuarioComponent } from './componente/add-usuario/add-usuario.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp
    (environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AngularFirestore, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
