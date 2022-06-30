import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faHouse,faSmile,faChartGantt,faMicrophone,faMessage,faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faHouse = faHouse;
  faSmile = faSmile;
  faChartGantt = faChartGantt;
  faMicrophone = faMicrophone;
  faMessage = faMessage;
  faGear = faGear;
  
  constructor() { }

  ngOnInit(): void {
  }

}
