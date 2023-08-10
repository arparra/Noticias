import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { noticiasData } from '../data/noticias-data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.page.html',
  styleUrls: ['./noticia-detalle.page.scss'],
})
export class NoticiaDetallePage implements OnInit {

  noticia: any;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const noticiaIndexParam = this.route.snapshot.paramMap.get('id');
    if (noticiaIndexParam !== null) {
      const noticiaIndex = +noticiaIndexParam;
      this.noticia = noticiasData[0].detailNoticias[noticiaIndex];
      console.log(this.noticia)
    }
  }

  goBack() {
    this.location.back();
  }

}
