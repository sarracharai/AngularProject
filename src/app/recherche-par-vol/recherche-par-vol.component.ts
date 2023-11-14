import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-recherche-par-vol',
  templateUrl: './recherche-par-vol.component.html',
  styles: [
  ]
})
export class RechercheParVolComponent implements OnInit{
  IdVol! : number;
  vols ! : Vol[];
  avions! : Avion[];
  constructor(private avionService : AvionService) {}

  ngOnInit(): void {
    this.avionService.listeVols().
      subscribe(avs => {this.vols = avs._embedded.vols;
      console.log(avs);
    });

    
  }
    
  onChange() {
      this.avionService.rechercherParVol(this.IdVol).
      subscribe(avs =>{this.avions=avs});
      }

  }


