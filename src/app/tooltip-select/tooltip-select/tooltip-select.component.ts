import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-select',
  templateUrl: './tooltip-select.component.html',
  styleUrls: ['./tooltip-select.component.css']
})
export class TooltipSelectComponent implements OnInit {

  @Input() defaultText: string;
  constructor() { }

  ngOnInit() {
  }

}
