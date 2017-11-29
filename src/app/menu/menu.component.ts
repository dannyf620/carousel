import { Article } from './../shared/article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() article:Article ;
  constructor() { }

  ngOnInit() {
  }

}
