import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MovielistComponent implements OnInit {

  @Input() movieList: any;
  @Input('actors') actorList: any;
  
  @Output() movieClick = new EventEmitter();
  @Output('outAlias') movieClickAlias = new EventEmitter();

  @ViewChild('addMovieEvent') header: ElementRef;

  dataBinding: boolean = false;
  twoWayBinding: string = '';

  constructor() { }

  ngOnInit() {
  }

  addMovieName(){
    console.log(this.header);
    this.movieList.push({
      _id: "741236589",
      movietitle: this.header.nativeElement
      .value,
      genre: "Fantasy",
      rating: 5,
      desc: "velit in sunt occaecat exercitation qui amet ex elit labore excepteur occaecat veniam nisi irure Lorem minim excepteur irure aliquip"
    });
  }

  movieData(data){
    this.movieClick.emit(data);
  }
  movieAliasData(data){
    this.movieClickAlias.emit(data);
  }

}
