import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  @Input() movieList: any;
  @Input('actors') actorList: any;
  dataBinding: boolean = false;
  twoWayBinding: string = '';

  constructor() { }

  ngOnInit() {
  }

  addMovieName(){
    this.movieList.push({
      _id: "741236589",
      movietitle: this.twoWayBinding,
      genre: "Fantasy",
      rating: 5,
      desc: "velit in sunt occaecat exercitation qui amet ex elit labore excepteur occaecat veniam nisi irure Lorem minim excepteur irure aliquip"
    });
  }

}
