import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  //Any tipo de dato que trae desde Firebase
  usuarioList : AngularFireList<any>;

  //Creamos un Tarea en donde no vamos a seleecionar nada 
  selectedUsuario : Usuario = new Usuario();
  //Permite Registrar en la base de datos
  constructor(private firebase : AngularFireDatabase) { }
  //Metodos para obtener los datos de la base de datos de Firebase
  getTareas() {//Asignarle la lista de elementeos y toda la lista esta alamcenada en tareas
    return this.usuarioList = this.firebase.list('Usuarios');
  }
  //Vamos a utilizar un parametro Tarea que sera de clase Usuario 
  insertTarea(usuario : Usuario){
    //Agregamos Datos a la Lista con este tenemos la Tarea que vamos a insertar
    this.usuarioList.push({
      descripcion: usuario.name
    });
  }
  updateTarea (usuario : Usuario){
    this.usuarioList.update(usuario.$key,{
      descripcion: usuario.name
    });

  }
  deleteTarea($key : string){
    this.usuarioList.remove($key);

  }
}
