import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Partido } from '../principal.model';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  partido: Partido;
  constructor(
    private activatedRoute: ActivatedRoute,
    private principalServicio: PrincipalService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('principalId')){
          // No existe el parametro redirecciono
          return;
        }
        const partidoId = paramMap.get('principalId');
        this.partido = this.principalServicio.getPartido(partidoId);
      }
    );
  }
  delete(){
    if(this.partido.finalizado) {
      this.alertCtrl.create({
        header: "Borrar",
        message: "Esta seguro que desea borrar este producto?",
        buttons: [
          {
            text: "Cancelar",
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: () => {
              this.principalServicio.deletePartido(this.partido.id);
              this.router.navigate(['/principal']);
            }
          }
        ]
      }).then(
        alertElement => {
          alertElement.present();
        }
      );
    } else {
      this.alertCtrl.create({
        header: "El partido aun no finaliza",
        message: "No se puede borrar partidos en transcurso",
        buttons: [
          {
            text: "Cerrar",
            role:'cancel'
          }
        ]
      }).then(
        alertElement => {
          alertElement.present();
        }
      );

    }
  }
}
