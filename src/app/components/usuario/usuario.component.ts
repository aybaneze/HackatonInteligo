import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    public usuarioService: UsuarioService  ) { }
  ngOnInit() {
    //Me trae todo el arreglo de datos
    this.usuarioService.getUsuario();
    this.resetForm();

  }
  /*Agregar el metodo para que sea utilizado en el html
  para poder agregar una nueva tarea */
  onSubmit(usuarioForm: NgForm) {
    
      this.usuarioService.insertUsuario(usuarioForm.value);
      this.resetForm(usuarioForm);
      alert('Hola');
   
  }

  /*Resetear el formulario cuando resivimos el formulario dera de tipo NgForm
      ? siginifica que es opcional */
  resetForm(usuarioForm?: NgForm) {
    if (usuarioForm != null) {
      usuarioForm.reset();
      this.usuarioService.selectedUsuario = new Usuario;

    }
  }

}
