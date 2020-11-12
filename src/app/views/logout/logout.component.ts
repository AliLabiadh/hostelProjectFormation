import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  title = 'Logout';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  onLogout(): void {
    const apiUrl = 'http://localhost:3000/api/users/logout?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k';
    this.http.post(
      apiUrl,
      null).subscribe();
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
