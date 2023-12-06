import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  constructor(private activatedrRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedrRoute.fragment.subscribe(a=>this.jump(a))}
  jump(a:string|null){
    if(a)
    document.getElementById(a)?.scrollIntoView({behavior:'smooth'})
  }  
}
