import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  menuList =[
    {name:'Contact Us', url:''},
    {name:'Login', url:''},
    {name:'Register', url:''},
    {name:'TestPage', url:'test-page'},
  ];
  constructor() { }

  ngOnInit() {}

}
