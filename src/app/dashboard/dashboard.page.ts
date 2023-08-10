import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noticiasData } from '../data/noticias-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  noticias = noticiasData[0].detailNoticias;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verDetalleNoticia(index: number) {
    this.router.navigate(['/noticia-detalle', index]);
  }

}
