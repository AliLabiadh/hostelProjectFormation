import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  title = 'Liste des chambres';

  constructor() { }

  ngOnInit(): void {
  }

}
