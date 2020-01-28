import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-status',
  templateUrl: './tab-status.component.html',
  styleUrls: ['./tab-status.component.scss']
})
export class TabStatusComponent implements OnInit {
  // Open panal
  panleExpanded = true;
  
  constructor() { }
  ngOnInit() {
  }

}
