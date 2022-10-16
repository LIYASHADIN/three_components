import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info-service';

@Component({
  selector: 'app-webpage2',
  templateUrl: './webpage2.component.html',
  styleUrls: ['./webpage2.component.css']
})
export class Webpage2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="KORE Component 2";
  btnclick()
  {
    // alert("hello from "+this.title);
    const service = new MyService();
    service.onbtnclick(this.title);
  }
}
