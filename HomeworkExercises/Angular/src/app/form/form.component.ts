import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router, ParamMap} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import * as $ from 'jquery';
import { tryParse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router: Router
  ) { }
  private  productId:number;


  ngOnInit() {
    var url=location.href.split("/").pop();
    console.log(url);
    if(url.length>10){
      $("#fun").text("修改資料");
      let data=JSON.parse(localStorage[url]);
      $("#name").val(data.name);
      $("#number").val(data.number);
      $("#address").val(data.address);
      $("#remark").val(data.remark);
    }
  }

  fun() {
    var url=location.href.split("/").pop();
    if(url.length>10){
      let formdata = {
        name: $("#name").val(),
        number: $("#number").val(),
        address: $("#address").val(),
        remark: $("#remark").val(),
      }
      localStorage.setItem(url, JSON.stringify(formdata));
    }else{
      let formdata = {
      name: $("#name").val(),
      number: $("#number").val(),
      address: $("#address").val(),
      remark: $("#remark").val(),
    }
    let datatime = (new Date().getTime()).toString();
    localStorage.setItem(datatime, JSON.stringify(formdata));
    }
  }
}
