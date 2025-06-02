import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
        //Executa logo na inicialização do componente
    this.mensagem();
  }
  mensagem() {
    console.log('Meu componente navbar inicializou(dentro de uma função)');
  }
}
