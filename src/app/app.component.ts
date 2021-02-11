import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Observer, Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'N';
  userdata$:Observable<any>
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.getUsers()
  }
  public  getUsers()
  {
      this.userdata$=this.http.get("https://localhost:5001/api/users")

  }
}
