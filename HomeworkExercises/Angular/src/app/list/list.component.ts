import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router, ParamMap} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private  productId:number;
  constructor(
    private route:ActivatedRoute,
    private router: Router
  ) { }
  private  homeId:number;
  ngOnInit() {
    for(let item in localStorage){
      if(item == "length") break;
      let data=JSON.parse(localStorage[item]);
      let $tr = $("<tr>").append(
                "<td id="+item+">" + data.name + "</td>" +
                "<td id="+item+">" + data.number + "</td>" +
                "<td id="+item+">" + data.address + "</td>" +
                "<td id="+item+">" + data.remark + "</td>" +
                "<td><a type='button' class='btn btn-primary' ng-reflect-router-link='/form,"+item+"' href=/form/"+item+" [queryParams]={id:"+item+"}>編輯</a></td>");
            $("#dateTable").append($tr);
    }
  }
}


