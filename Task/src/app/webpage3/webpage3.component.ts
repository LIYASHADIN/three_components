import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info-service';

@Component({
  selector: 'app-webpage3',
  templateUrl: './webpage3.component.html',
  styleUrls: ['./webpage3.component.css']
})
export class Webpage3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="KORE Component 3";
  btnclick()
  {
    // alert("hello from "+this.title);
    const service = new MyService();
    service.onbtnclick(this.title);
  }

}
