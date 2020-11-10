import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AI Enabled COA';
  hostUrl = 'http://128.199.29.157:5000';
  //http://128.199.29.157:5000/getpath?q=land
  searchName: string;
  myData;
  constructor(private http: HttpClient){
  }

  getPath(){
    this.http.get<any>(this.hostUrl + '/getpath',
    {
      params: new HttpParams().set('q', this.searchName),
      headers: new HttpHeaders()
        .set('Access-Control-Allow-Headers', 'Content-Type')
        .set('Access-Control-Allow-Methods', 'GET')
        .set('Access-Control-Allow-Origin', '*'),
    })
    .subscribe(data => {
      let res  = data.split("-->");
      this.myData = res;
      var myJsonString = JSON.stringify(res);

      console.log(this.myData);

      console.log(myJsonString);
    });
  }

  reset(){
this.searchName = null;
this.myData = null;

  }
}
