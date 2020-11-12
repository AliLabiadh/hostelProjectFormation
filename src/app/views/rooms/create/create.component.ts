import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {


  title = 'Create Room';

  constructor() { }

  ngOnInit(): void {
  }

}
