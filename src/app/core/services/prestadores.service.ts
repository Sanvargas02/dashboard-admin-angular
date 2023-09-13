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
    //Creamos una referencia a la colleción
    const prestadorRef = collection(this.firestore, 'prestadores'); // Servicio y nombre de la colección
    //Añadimos en un documento la referencia y los datos que lo componen
    return addDoc(prestadorRef, prestador); // Retorna una Promesa
  }


}
