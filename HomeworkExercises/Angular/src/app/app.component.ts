import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  btnsearch(){
    $("#dateTable").html("");
    let $btn=($("#btnsearch").val()).toString();
    for(let item in localStorage){
      if(item == "length") break;
      if(localStorage[item].indexOf($btn)>-1){
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
    /*$.each($("td"),function(i, val){
      if((val.innerText).indexOf($btn)>-1){
        $("#dateTable").html("");
        let data=JSON.parse(localStorage[val.id]);
         let $tr = $("<tr>").append(
                "<td id="+val.id+">" + data.name + "</td>" +
                "<td id="+val.id+">" + data.number + "</td>" +
                "<td id="+val.id+">" + data.address + "</td>" +
                "<td id="+val.id+">" + data.remark + "</td>" +
                "<td><a type='button' class='btn btn-primary' ng-reflect-router-link='/form,"+val.id+"' href=/form/"+val.id+" [queryParams]={id:"+val.id+"}>編輯</a></td>");
            $("#dateTable").append($tr);
        //console.log(val.id);
      }
      //console.log(val.innerText);
    })*/
    //console.log();
  }
}



