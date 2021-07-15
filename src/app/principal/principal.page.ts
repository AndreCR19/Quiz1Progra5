import { Component, OnInit } from '@angular/core';
import { Partido } from './principal.model';
import { PrincipalService} from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  partidos: Partido[];
  constructor(private principalServicio: PrincipalService) { }

  ngOnInit() {
    console.log("entro al init");
    this.partidos = this.principalServicio.getAll();
  }
  ionViewWillEnter(){
    console.log("Entro al will enter");
    console.log("Entro al will enter");
    this.partidos = this.principalServicio.getAll();
  }
}
