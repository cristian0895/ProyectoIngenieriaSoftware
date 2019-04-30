import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {UsuarioInterface} from '../usuarioInterface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection: AngularFirestoreCollection<any>;
  usuarios: Observable<any[]>;

  iniciar (tipo: string){
    this.usuarioCollection = this.afs.collection<any>(tipo);
    this.usuarios = this.usuarioCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UsuarioInterface;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }
  constructor(public afs: AngularFirestore) {
  
   }

   getUsuarios(){
     return this.usuarios;
   }
   addUsuario(usuario: any){
     this.usuarioCollection.add(usuario);
     alert("Se ha registrado el usuario");
   }
   
   readUsuario(tipo: string, id: string){
    
    console.log(this.afs.doc(tipo+"/"+id).ref.);
  }
}
