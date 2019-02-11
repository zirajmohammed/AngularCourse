import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

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
    },
    {
      "_id": "5c60d2dfd07ea5a84456b2c3",
      "movietitle": "Unisure",
      "genre": "Fantasy",
      "rating": 9,
      "desc": "labore sunt veniam quis quis sint do ipsum elit reprehenderit pariatur ut ullamco et velit excepteur ex nulla aliquip nulla"
    },
    {
      "_id": "5c60d2dfcc81cf7bb6f12146",
      "movietitle": "Wrapture",
      "genre": "Fantasy",
      "rating": 8,
      "desc": "voluptate sint ipsum officia nulla id pariatur nostrud incididunt nisi deserunt incididunt mollit duis do proident nostrud proident excepteur excepteur"
    },
    {
      "_id": "5c60d2df76a40ca620577a12",
      "movietitle": "Lovepad",
      "genre": "Fantasy",
      "rating": 5,
      "desc": "culpa irure aliqua id dolore duis aute minim ipsum ullamco occaecat tempor consequat non cupidatat tempor sit magna mollit eiusmod"
    },
    {
      "_id": "5c60d2dfc2fc46cce36625bf",
      "movietitle": "Accruex",
      "genre": "Fantasy",
      "rating": 4,
      "desc": "mollit commodo veniam irure sit laboris cillum veniam esse quis tempor aute quis amet anim ipsum ut cupidatat sit cupidatat"
    },
    {
      "_id": "5c60d2dfe198c57180870a74",
      "movietitle": "Isotrack",
      "genre": "Romance",
      "rating": 9,
      "desc": "magna culpa minim do laboris est enim veniam tempor nisi mollit ad cillum ullamco dolore fugiat ad magna fugiat exercitation"
    },
    {
      "_id": "5c60d2df4d6a79f6a24a32e0",
      "movietitle": "Zappix",
      "genre": "Sci-Fi",
      "rating": 4,
      "desc": "culpa anim consectetur ex anim quis incididunt esse adipisicing sit commodo reprehenderit anim elit eiusmod sit eiusmod veniam sint qui"
    },
    {
      "_id": "5c60d2df16f3f2e7c43cedb5",
      "movietitle": "Pearlessa",
      "genre": "Animation",
      "rating": 5,
      "desc": "qui incididunt anim velit do pariatur qui tempor elit in adipisicing non nisi labore adipisicing occaecat reprehenderit commodo ea ut"
    },
    {
      "_id": "5c60d2dff4ed47a2b0d9c211",
      "movietitle": "Microluxe",
      "genre": "Sci-Fi",
      "rating": 5,
      "desc": "fugiat cillum irure eiusmod qui incididunt cillum consequat reprehenderit fugiat magna mollit sunt officia laborum irure id esse tempor laboris"
    },
    {
      "_id": "5c60d2dfe00262b2bb0c10aa",
      "movietitle": "Acumentor",
      "genre": "Animation",
      "rating": 6,
      "desc": "qui ut dolore excepteur ipsum minim irure pariatur veniam laboris commodo qui duis velit qui commodo labore proident nulla tempor"
    },
    {
      "_id": "5c60d2dfcfc65304de022540",
      "movietitle": "Xurban",
      "genre": "Fantasy",
      "rating": 9,
      "desc": "velit eiusmod fugiat irure fugiat est et do deserunt qui ullamco ullamco magna sint duis laborum ad deserunt commodo enim"
    },
    {
      "_id": "5c60d2dfe6bb853d5edeac11",
      "movietitle": "Comvene",
      "genre": "Comedy",
      "rating": 8,
      "desc": "minim sint occaecat eiusmod eu nulla dolor quis exercitation reprehenderit deserunt do incididunt veniam quis ea commodo fugiat do cillum"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
