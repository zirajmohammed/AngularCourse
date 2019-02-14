import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @ViewChild('newCheck') header: ElementRef;
  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) { //called when any data-bound property of a directive changes
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() { // called after Angular has initialized all data-bound properties
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() { //invokes a custom change-detection function for a directive, in addition to the check performed by the default change-detector
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() { //called after Angular has fully initialized all content of a directive
    console.log('ngAfterContentInit called!');
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentChecked() { // the default change detector has completed checking all content of a directive
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() { //called after Angular has fully initialized a component's view
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() { //called after the default change detector has completed checking a component's view for changes
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() { //called when a directive, pipe, or service is destroyed
    console.log('ngOnDestroy called!');
  }

}
