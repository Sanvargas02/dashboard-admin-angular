import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-prestador',
  templateUrl: './agregar-prestador.component.html',
  styleUrls: ['./agregar-prestador.component.css']
})
export class AgregarPrestadorComponent implements OnInit {

  createPlace: FormGroup; //Propiedad para almacenar los valores del Formulario y Gestionarlos
  submitted = false; //Para saber si se envió el form

  constructor(
    private fb: FormBuilder, // Modulo para Formulario - Permite validar el formulario de manera sencilla
  ) {
    //Aquí inicializamos propiedades
    //Formulario - Se declaran las variables que lo conforman
    this.createPlace = this.fb.group({

    })
  }

  ngOnInit():void {

  }

}
