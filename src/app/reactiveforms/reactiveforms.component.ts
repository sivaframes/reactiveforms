import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import {UploadpicService} from "../services/uploadpic.service"
import { first } from 'rxjs/operators';
import {checkname} from "../common/namevalidator.directive"

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb:FormBuilder,private upload:UploadpicService) { }
  educationdet = ["SSC","INTER","B.TECH"]
  reactiveform:FormGroup;
  selectedFile:File;
  ngOnInit() {
    
    this.reactiveform = this.fb.group({
      name:["",[Validators.required,checkname(/^[0-9 / * - + ) (]+$/)]],
      email:["",Validators.required],
      education:this.fb.array([
        this.fb.group({
          branch:["",Validators.required],
          iname:["",Validators.required],
          marks:["",Validators.required]
        })
      ])
    })
  }
  fileProgress(fileInput: any) {
    
    this.selectedFile = fileInput.files[0];
    console.log(this.selectedFile)
  }
    /* const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(this.selectedFile)
    });

    reader.readAsDataURL(file); */
  
get education(){
  return this.reactiveform.get('education') as FormArray
}
addeducation(){
  if(this.education.length<3){
  this.education.push(
    this.fb.group({
      branch:[],
      iname:[],
      marks:[]
    })
  )
  }
}
deleteedu(i){
  if(this.education.length !=1){
    this.education.removeAt(i)
  }
 
}
onSubmit(){
  console.log(this.reactiveform.controls.name)
 // console.log("final value " , this.reactiveform)
  //this.upload.sendData(this.reactiveform.value,this.selectedFile).pipe(first()).subscribe(data => console.log(data))

}
}
