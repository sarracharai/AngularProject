import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-add-avion',
  templateUrl: './add-avion.component.html',
  styleUrls: ['./add-avion.component.css']
})

export class AddAvionComponent implements OnInit{
  newAvion = new Avion();
  vols! : Vol[];
  newIdV! : number;
  newVol! : Vol;

  message : string | undefined ;
  constructor(private avionService: AvionService,
              private router : Router) { }

  ngOnInit(): void {
    //this.vols = this.avionService.listeVols();
    this.avionService.listeVols().subscribe(vs => {console.log(vs);
                                                    this.vols = vs._embedded.vols;
      }
            
);
   }

  addAvion(){
    this.newAvion.vol = this.vols.find(v => v.idV == this.newIdV)!;
    this.avionService.ajouterAvion(this.newAvion).subscribe(av => {
      console.log(av);
      this.router.navigate(['avions']);
    });
  }
 

  
}
