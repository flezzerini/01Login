import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  valid?: boolean;
  register?: string;

  constructor(
    private _userLogin: UsersService,
    public route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }, {updateOn: 'blur'})
  }

  onLogin(){
    console.log('Sei entrato');
    this._userLogin.postLogin(this.form.value).subscribe(console.log);   
  }

  onRegister(){
    console.log('Sei registrato');
    this._userLogin.postRegister(this.form.value).subscribe(console.log);
  }

  onSubmit() {
    this.form.markAllAsTouched(); 
  }

  onReset(){
    this.form.reset();
  }

}
