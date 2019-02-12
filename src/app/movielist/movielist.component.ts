import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  dataBinding: boolean = false;
  twoWayBinding: string = '';
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

  constructor() { }

  ngOnInit() {
  }

  addMovieName(){
    this.movies.push({
      _id: "741236589",
      movietitle: this.twoWayBinding,
      genre: "Fantasy",
      rating: 5,
      desc: "velit in sunt occaecat exercitation qui amet ex elit labore excepteur occaecat veniam nisi irure Lorem minim excepteur irure aliquip"
    });
  }

}
