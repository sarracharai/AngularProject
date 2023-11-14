import { Component, OnInit } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Vol } from '../model/vol.model';


@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [
  ]
})
export class UpdateAvionComponent implements OnInit{

  currentAvion = new Avion();
  vols! : Vol[];
  updatedVId! : number;

  constructor(private activatedRoute: ActivatedRoute,
            private router :Router,
            private avionService: AvionService) { }


  ngOnInit(): void {
    this.avionService.listeVols().
    subscribe(vs =>{this.vols = vs._embedded.vols;
                        console.log(vs);
      });
  this.avionService.consulterAvion(this.activatedRoute.snapshot.params['id'])
  .subscribe( av =>{ this.currentAvion = av; 
      this.updatedVId =this.currentAvion.vol.idV;
  } ) ;

  }

  updateAvion() {
    this.currentAvion.vol = this.vols.
          find(v => v.idV == this.updatedVId)!;
      this.avionService.updateAvion(this.currentAvion)
      .subscribe(av => {
        //console.log(av);
        this.router.navigate(['avions']);
    });
  }

}
