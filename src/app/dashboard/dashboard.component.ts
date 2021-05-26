import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  List : any = [];
  constructor(public userDataService:UserDataService) { }

  ngOnInit(): void {
    this.List = this.userDataService.fetchFromLocalStorage();
    console.log(this.List);
  }

}