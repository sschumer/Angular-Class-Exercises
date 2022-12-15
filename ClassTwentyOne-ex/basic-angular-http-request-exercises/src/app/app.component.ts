import { Component } from '@angular/core';

import { MyMovies } from './myMovies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-angular-http-request-exercises';

movie = new MyMovies("Goonies", "adventure comedy")

  submitted = false;

  onSubmit() { this.submitted = true; }

 // showFormControls(form: any) {
 //   return form && form.controls.title &&
 //   form.controls.title.value;
 // }
}
