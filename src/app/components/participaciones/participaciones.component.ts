import { Component, OnInit } from '@angular/core';
import { addDoc, Firestore,  collection, getDocs, updateDoc, doc, deleteDoc } from '@angular/fire/firestore'


@Component({
  selector: 'app-participaciones',
  templateUrl: './participaciones.component.html',
  styleUrls: ['./participaciones.component.scss']
})
export class ParticipacionesComponent{

  public data: any = []

  filterTerm!: string;

  constructor(public firestore: Firestore) {
    this.getData()
  }

  addData(value: any) {
    const dbinstance = collection(this.firestore, 'participacion')
    addDoc(dbinstance, value)
      .then(() => {
        alert('Dato Agregado')
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  getData() {
    const dbinstance = collection(this.firestore, 'participacion')
    getDocs(dbinstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }

  updateDataAumentar(id: string, participacion: number) {
    console.log(id + participacion)
    var total: number = participacion + 1
    const dataToUpdate = doc(this.firestore, 'participacion', id);
    updateDoc(dataToUpdate, {
      participaciones: total
    })
      .then(() => {
        alert("Dato actualizado")
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })

  }

  updateDataDisminuir(id: string, participacion: number) {
    console.log(id + participacion)
    var total: number = participacion - 1
    const dataToUpdate = doc(this.firestore, 'participacion', id);
    updateDoc(dataToUpdate, {
      participaciones: total
    })
      .then(() => {
        alert("Dato actualizado")
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })

  }

  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'participacion', id)
    deleteDoc(dataToDelete)
      .then(() => {
        alert("Dato eliminado")
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })
  }

}
