import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametrized-example',
  templateUrl: './parametrized-example.component.html',
  styleUrls: ['./parametrized-example.component.css']
})
export class ParametrizedExampleComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => console.log(params['truc']));
  }


}