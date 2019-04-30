import { Component } from '@angular/core';
import {UsuarioInterface} from '../app/usuarioInterface';
import {UsuarioService} from '../app/services/usuario.service';
import {NgForm} from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario : UsuarioInterface={
    nombre :'',
    password :'',
    correo :''
  }
  items: Array<any>;
  constructor(private usuarioService: UsuarioService){
    this.usuarioService.iniciar('Usuarios');
  }
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      
    })
  }
  onGuardarUsuario(nombre: string, correo: string,password: string){
    this.usuario.id='';
    this.usuario.nombre = nombre;
    this.usuario.correo = correo;
    this.usuario.password = password;
    this.usuarioService.addUsuario(this.usuario);
  }
  readUsuario(){
    this.usuarioService.readUsuario("Usuarios", "Mb9cmYOReToGX5bz");
  }
}
