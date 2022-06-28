import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  constructor() {}

  ngOnInit(): void {}
}
