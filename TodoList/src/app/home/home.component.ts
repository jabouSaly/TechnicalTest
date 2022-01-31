import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any[]=[];

  favoriteList: any[]=[];

  display: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    fetch('http://www.omdbapi.com/?s=batman&apikey=5d3506fc')
    .then(response => response.json())
    .then(res => this.list = res.Search);
    this.primengConfig.ripple = true;
  }

  add(item: string) {
    this.list.push({id: this.list.length, Title:item});
  }

  removeMovie(id: number) {
    this.list= this.list.filter(item => item.id !== id)
  }

  addTofavorite(item: string) {
    this.favoriteList.push({id: this.list.filter(item => item.id), name: item});
  }

  openModal(){
    this.display = true;
  }

  removeFavorite(id: number){
    this.favoriteList= this.favoriteList.filter(item => item.id !== id)
  }
}
