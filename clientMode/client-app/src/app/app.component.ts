import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-app';
  results: string[];
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-riccardolotor-expressjs-or0v878upk0.ws-eu116.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data['results'];
    console.log(this.results);
  });
  }
}
