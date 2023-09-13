import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrestadoresService {

  //Inyección de servicios Firebase
  constructor( private firestore: Firestore) {}

  //Método para generar los empleados e insertarlos en la base de datos
  //Create - C
  agregarPrestador(prestador: any): Promise<any> {

    //? -> Deberíamos ejecutar la carga de archivos antes de guardar los datos en la BD para que se guarde el arreglo de paths de la Imágenes de una vez en Firestore.
    //Hacer una validación para ejecutar el código si hay Archivos para cargar, de otra forma no es necesario

    //CARGA DE DATOS A FIRESTORE - YA SEA QUE LLEVE PATHS DE IMÁGENES O NO
    //Creamos una referencia a la colleción
    const prestadorRef = collection(this.firestore, 'prestadores'); // Servicio y nombre de la colección
    //Añadimos en un documento la referencia y los datos que lo componen
    return addDoc(prestadorRef, prestador); // Retorna una Promesa
  }


}
