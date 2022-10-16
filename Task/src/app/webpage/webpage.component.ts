import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info-service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="KORE Component 1";
  btnclick()
  {
    // alert("hello from "+this.title);
    const service = new MyService();
    service.onbtnclick(this.title)
  }
}
