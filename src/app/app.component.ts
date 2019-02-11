import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New movies are yet to be added';

  changeTextInTitle(){
    this.title = 'The new movie title is Changed';
  }
}
