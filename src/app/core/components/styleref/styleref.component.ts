import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-styleref',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './styleref.component.html',
  styleUrls: ['./styleref.component.scss']
})
export class StylerefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
