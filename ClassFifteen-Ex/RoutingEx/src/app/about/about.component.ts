import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BobComponent } from './bob/bob.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }

}
