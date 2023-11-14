import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Vol } from '../model/vol.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { VolWrapper } from '../model/volWrapped.model';


const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  avions!: Avion[]; //un tableau de avion
  //vols! : Vol[];
  apiURL: string = 'http://localhost:8082/avions/api';
  apiURLV: string = 'http://localhost:8082/avions/v';

  constructor(private http : HttpClient) { 
    // this.vols=[  
    // {idV : 1,aeroportArriveeV : "carthage",aeroportDepartV:"paris", statutV : "en cours",destinationV : "Tunis"},
    // {idV : 2,aeroportArriveeV : "monastir",aeroportDepartV:"ville franche", statutV : "en cours",destinationV : "Nice"}
    // ];

    /*this.avions = [
      {idAvion : 1, nomAvion : "Hannibal Aviation", capacite : 500, compagnie : "Tunisair", 
      vol : { idV : 1, aeroportArriveeV : "carthage",aeroportDepartV:"paris", statutV : "en cours",destinationV : "Tunis"} },
      {idAvion : 2, nomAvion : "Atlas", capacite : 800, compagnie :"NouvelAir" , 
      vol : {idV : 2,aeroportArriveeV : "monastir",aeroportDepartV:"ville franche", statutV : "en cours",destinationV : "Tunis"}},
      {idAvion : 3, nomAvion :" hannibal", capacite : 700, compagnie : "Tunisair", vol : {idV : 1,aeroportArriveeV : "carthage",aeroportDepartV:"paris", statutV : "en cours",destinationV : "Nice"}} 
    ]; */
  }

  listeAvion(): Observable<Avion[]>{
    return this.http.get<Avion[]>(apiURL);
    }

  


  listeVols():Observable<VolWrapper>{
      return this.http.get<VolWrapper>(this.apiURLV);
    }



  ajouterAvion( av: Avion):Observable<Avion>{
    return this.http.post<Avion>(apiURL, av, httpOptions);
    }


  supprimerAvion(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

    
  consulterAvion(id: number): Observable<Avion> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Avion>(url);
        }
  


  trierAvions() {
    this.avions = this.avions.sort((n1, n2) => {
      if (n1.idAvion! > n2.idAvion!) {
        return 1;
      }
      if (n1.idAvion! < n2.idAvion!) {
        return -1;
      }
      return 0;
    });
  }


  updateAvion(av: Avion): Observable<Avion> {
    return this.http.put<Avion>(this.apiURL, av, httpOptions);
  }


  rechercherParVol(idV: number):Observable< Avion[]> {
    const url = `${this.apiURL}/avv/${idV}`;
    return this.http.get<Avion[]>(url);
    }


  rechercherParNom(nom: string):Observable< Avion[]> {
      const url = `${this.apiURL}/avsByName/${nom}`;
      return this.http.get<Avion[]>(url);
      }
    
  
    

  // consulterVol(id:number): Vol
  // {
  //   return this.vols.find(v => v.idV == id)!;
  // }
}

