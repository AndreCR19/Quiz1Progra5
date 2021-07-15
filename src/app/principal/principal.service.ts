import { Injectable } from '@angular/core';
import { Partido } from './principal.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private partidos: Partido[] = [
    {
      id: "euro1001",
      team1: "Italia",
      team2: "Inglaterra",
      marcador: "1-1",
      tiempo: 120,
      title: "Final",
      competetition: "EuroCopa",
      imgteam1:"https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ita.png",
      imgteam2:"https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ing.png",
      finalizado: true,
      eventos: ['KICKOFF! We are underway!', '2 GOAL ENGLAND!!!! WHAT A START AS LUKE SHAW VOLLEYS IT IN FIRST TIME AT THE FAR POST! 1-0',
       '47 Barella yellow card', '54 Cristante replaces Barella', '55 Berardi replaces Immobile',
       '67 GOAL ITALY!! LEONARDO BONUCCI STABS IT IN AFTER A SCAMBLE IN THE ENGLAND PENALTY AREA! 1-1',
       'END OF REGULAR TIME, Italy 1 (Bonucci 67) England 1 (Shaw 2)', 'ITALY WINS THE PENALTY SHOOTOUT 3-2']
    },
    {
      id: "euro1002",
      team1: "Italia",
      team2: "Inglaterra",
      marcador: "1-1",
      tiempo: 86,
      title: "Final",
      competetition: "EuroCopa",
      imgteam1:"https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ita.png",
      imgteam2:"https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ing.png",
      finalizado: false,
      eventos: ['KICKOFF! We are underway!', '2 GOAL ENGLAND!!!! WHAT A START AS LUKE SHAW VOLLEYS IT IN FIRST TIME AT THE FAR POST! 1-0',
       '47 Barella yellow card', '54 Cristante replaces Barella', '55 Berardi replaces Immobile',
       '67 GOAL ITALY!! LEONARDO BONUCCI STABS IT IN AFTER A SCAMBLE IN THE ENGLAND PENALTY AREA! 1-1']
    },
    {
      id: "euro1003",
      team1: "Italia",
      team2: "Inglaterra",
      marcador: "1-1",
      tiempo: 120,
      title: "Final",
      competetition: "EuroCopa",
      imgteam1:"https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ita.png",
      imgteam2:"https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ing.png",
      finalizado: true,
      eventos: ['KICKOFF! We are underway!', '2 GOAL ENGLAND!!!! WHAT A START AS LUKE SHAW VOLLEYS IT IN FIRST TIME AT THE FAR POST! 1-0',
       '47 Barella yellow card', '54 Cristante replaces Barella', '55 Berardi replaces Immobile',
       '67 GOAL ITALY!! LEONARDO BONUCCI STABS IT IN AFTER A SCAMBLE IN THE ENGLAND PENALTY AREA! 1-1',
       'END OF REGULAR TIME, Italy 1 (Bonucci 67) England 1 (Shaw 2)', 'ITALY WINS THE PENALTY SHOOTOUT 3-2']
    },
    {
      id: "ame1111",
      team1: "Brazil",
      team2: "Argentina",
      marcador: "0-1",
      tiempo: 55,
      title: "Final",
      competetition: "Copa America",
      imgteam1:"https://t.resfu.com/img_data/escudos/medium/3775.jpg?size=240x&7",
      imgteam2:"https://seeklogo.com/images/A/argentina-escudo-seleccion-10-11-logo-A58237BCE7-seeklogo.com.png",
      finalizado: false,
      eventos: ['El partido empieza!', '22 Gooooool del Argentina', '45+1 Termina el primer tiempo', 'Parada de Emi Martinez']
    }
  ];
  constructor() { }
  getAll(){
    return [...this.partidos];
  }
  getPartido(principalId: string){
    return {...this.partidos.find(
      partido => principalId === partido.id
    )};
  }
  deletePartido(principalId: string){
    this.partidos = this.partidos.filter(
      partido => partido.id !== principalId
    );
  }
}
