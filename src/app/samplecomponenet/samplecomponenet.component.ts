import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplecomponenet',
  templateUrl: './samplecomponenet.component.html',
  styleUrls: ['./samplecomponenet.component.css']
})
export class SamplecomponenetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ob = [{
    message : "hello 1st obj",
    color:"red"
  },
  {
    message : "hello 2nd obj",
    color:"green"
  },
]


}
