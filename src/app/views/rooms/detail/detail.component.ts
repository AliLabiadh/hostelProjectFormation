import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  room: any;
  id: number;
  title = 'Detail Room';
  apiUrl = 'http://localhost:3000/api/rooms/1?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.getRoom(this.id);
  }

  private getRoom(id: number): void{
    this.http.get<any[]>(`http://localhost:3000/api/rooms/${this.id}?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k`).subscribe(
      room => {
        this.room = room;
        console.log(room);
      },
    );
  }

}
