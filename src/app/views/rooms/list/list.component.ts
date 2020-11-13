import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  private readonly apiUrl = 'http://localhost:3000/api/rooms?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k';
  roomsList: any[];
  title = 'Liste des chambres';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getRoomsList();
  }

  onDetail(id: number): void {
    this.router.navigate(['rooms', id]);
  }

  private getRoomsList(): void{
    this.http.get<any[]>(this.apiUrl).subscribe(
      roomsList => {
        this.roomsList = roomsList;
        console.log(roomsList);
      },
    );
  }

  selectColor(id: number): string {
  return (id % 2 === 0) ? 'silver' : '';
  }
}
