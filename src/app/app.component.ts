import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New movies are yet to be added';
  clickedMovieName = '';
  clickedAliasMovieName = '';

  actorListComplete = [
    {
      'name' : 'Johnny Depp'
    },
    {
      'name' : 'Rosa Salazar'
    },
    {
      'name' : 'Bruce Wills'
    }
  ];
  movies = [
    {
      "_id": "5c60d2dfd4c2dc72259087ec",
      "movietitle": "Rodeocean",
      "genre": "Fantasy",
      "rating": 5,
      "desc": "velit in sunt occaecat exercitation qui amet ex elit labore excepteur occaecat veniam nisi irure Lorem minim excepteur irure aliquip"
    },
    {
      "_id": "5c60d2df54548a881818d257",
      "movietitle": "Oronoko",
      "genre": "Fantasy",
      "rating": 8,
      "desc": "esse ullamco cupidatat cillum cillum nostrud esse qui sit fugiat consectetur exercitation amet ut ad irure commodo fugiat cupidatat nostrud"
    },
    {
      "_id": "5c60d2dfe6acbcab33806898",
      "movietitle": "Sulfax",
      "genre": "Sci-Fi",
      "rating": 8,
      "desc": "aliqua tempor qui tempor non consectetur nostrud velit veniam Lorem proident esse excepteur consequat labore sint do fugiat velit officia"
    }
  ];

  changeTextInTitle() {
    this.title = 'The new movie title is Changed';
  }

  movieClickData(data){
    this.clickedMovieName = data.movietitle;
  }

  movieClickAliasData(data){
    this.clickedAliasMovieName = data.movietitle;
  }
}
