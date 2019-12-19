import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

registerForm:FormGroup;
countryDropDown:any[]=['India','Australia'];
stateDropDown:any[]=[{India:['Tamilnadu','Banglore','Mumbai','Delhi']},{Australia:['Melbourne','Sydney']}];
genderButton:any[]=['Male','Female'];


  constructor(private fb:FormBuilder) { 

  }

  ngOnInit() {

this.registerForm=this.fb.group({
Username:['',[Validators.required,Validators.minLength(5)]],
Email:['',[Validators.required,Validators.pattern('[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]')]],
Mobile:['',[Validators.required,Validators.pattern('[6-9]{1}.[0-9]{9}')]],
//Country:[this.fb.array([this.getCountryForm()],Validators.required)],
Country:[this.countryDropDown,Validators.required],
State:[this.fb.array([this.getStateForm()],Validators.required)],
Gender:[this.genderButton,Validators.required],
License:['',Validators.requiredTrue]

});

  }

//   getCountryForm():FormGroup{
//     return this.fb.group({
// Country:this.countryDropDown
//     })
//   }

  getStateForm():FormGroup{
return this.fb.group({

State:this.stateDropDown
})
  }

}
