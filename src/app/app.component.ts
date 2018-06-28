import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  app_title = 'Ivanti';
  otherCountryCode = 'en-US';
  countries = [{
  	name: 'English',
  	code: 'en-US'
  },
  {
  	name: 'German',
  	code: 'de-DE'
  }];

}

  // JS

