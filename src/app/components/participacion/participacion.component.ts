import { Component } from '@angular/core';
import { Firestore,  collection, getDocs,  } from '@angular/fire/firestore'


@Component({
  selector: 'app-participacion',
  templateUrl: './participacion.component.html',
  styleUrls: ['./participacion.component.scss']
})
export class ParticipacionComponent {

  public data: any = []

  filterTerm!: string;

  constructor(public firestore: Firestore) {
    this.getData()
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

}


