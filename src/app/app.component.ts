import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name = "emon2";
  getName(){
    return this.name;
  };
  obj={
    name : "emon obj",
    age: 20
  };
  arr=["EMON","ROBIN","SHAKIL"];
  siteUrl = window.location.href;
}
