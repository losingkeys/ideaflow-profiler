import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:  ViewEncapsulation.None
})
export class AppComponent {
  public navLinks = [
    "home",
    "glossary",
    "faq",
    "spc"
  ]
}