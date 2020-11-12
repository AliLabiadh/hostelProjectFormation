import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  title = 'Logout';

  constructor() { }

  ngOnInit(): void {
  }


  onLogout(): void {
    console.log('logout');
  }

  onCancel() {
    console.log('cancel');
  }
}
