import { Component } from '@angular/core';

@Component({
  selector: 'app-array-slice',
  templateUrl: './array-slice.component.html',
  styleUrls: ['./array-slice.component.scss']
})
export class ArraySliceComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  startIndex = 0; // Adjust as needed
  endIndex = 2;   // Adjust as needed
}