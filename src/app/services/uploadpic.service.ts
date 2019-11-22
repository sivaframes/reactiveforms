import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
 @Injectable({
  providedIn: 'root'
})
export class UploadpicService {

  constructor(private http:HttpClient) { }
sendData(finaldata,file){
  const options = {} as any;
finaldata['img_name'] ="test"
const formData = new FormData();
Object.keys(finaldata).forEach(key => {
  if(key == "education"){
    formData.append(key,JSON.stringify(finaldata[key]))
  }else{
    formData.append(key,finaldata[key])
  }
});
formData.append('profile_img',file)

return this.http.post("http://127.0.0.1:5000/uploadingpic",formData,options)
}
}
