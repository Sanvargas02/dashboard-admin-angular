import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestadorTuristico } from 'src/app/common/place.interface';

@Component({
  selector: 'app-agregar-prestador',
  templateUrl: './agregar-prestador.component.html',
  styleUrls: ['./agregar-prestador.component.css']
})
export class AgregarPrestadorComponent implements OnInit {

  // ? -> La propiedad createPrestador no es un Objeto, es una Propiedad de Almacén de los datos HTML
  createPrestador: FormGroup; //Propiedad para almacenar los valores del Formulario y Gestionarlos.

  // ? -> lo vamos a utilizar en el ngIf del span del aviso una vez enviado el Form
  submitted = false; //Para saber si se envió el form.

  constructor(
    private fb: FormBuilder, // Modulo para Formulario - Permite validar el formulario de manera sencilla.
  ) {
    //Aquí inicializamos propiedades.
    //Formulario - Se declaran las variables que lo conforman.
    this.createPrestador = this.fb.group({
      nombre: ['', Validators.required],
      rntRm: ['', Validators.required],
      descripcion: ['', Validators.required],
      servicios: ['', Validators.required],
      zona: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', Validators.required],
      indicacionesAcceso: ['', Validators.required],
      googleMaps: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      whatsapp: ['', Validators.required],
      celular1: ['', Validators.required],
      celular2: ['', Validators.required],
      facebook: ['', Validators.required],
      instagram: ['', Validators.required],
      pagWeb: ['', Validators.required],
      correo: ['', Validators.required],
      horarioAtencion: ['', Validators.required],
    })
  }

  ngOnInit():void {

  }

  //Aquí se gestionan los datos que se digitan desde el html - Se ejecuta lo que queremos hacer inmediatamente enviemos el Form.
  agregarPrestador() {

    this.submitted = true; //Confirmamos que se envió el formulario.

    //Usamos una validación en caso de que el Formulario sea inválido. (Se ve en el status).
    if(this.createPrestador.invalid) {
      return; //Sale del método y no ejecuta nada más.
    }

    //Ahora vamos a crear nuestra constante de tipo Object definida en la Interfaz, en este caso PrestadorTuristico
    const prestadorTuristico: PrestadorTuristico = {
      //id -> Nos lo da firebase
      name: '',
      rntRm: '',
      descripcion: '',
      servicios: '',
      zona: '',
      municipio: '',
      direccion: '',
      indicacionesAcceso: '',
      googleMaps: '',
      latitud: 1,
      longitud: 1,
      whatsapp: 1,
      celular1: 1,
      celular2: 1,
      facebook: '',
      instagram: '',
      pagWeb: '',
      correo: '',
      horarioAtencion: '',
      pathImage: [], // -> lo conseguimos en la inserción de imágenes
      meGusta: 1 // -> # de Me gustas en la App
    }

    console.log(this.createPrestador);
  }

}
