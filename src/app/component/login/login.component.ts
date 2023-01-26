import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.createForm();
  valid?: boolean;
  register?: string;
  registerRoute: boolean = false;
  titleButton!: string;

  constructor(
    private _userLogin: UsersService,
    public route: ActivatedRoute,
    private readonly activate: Router
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);     
      if('order' in params){
        this.registerRoute = !this.registerRoute;
      } else {
        this.registerRoute = false; 
      }
      // gestione title button
      // gestione title routing
      // eventuali condizioani addizionalei
    });
  }

  createForm():FormGroup{
    return new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }, {updateOn: 'blur'})
  }

  onRegisterLogin(){
    // posso utllizzare il variablie
    //decidere metodo da usare
    if (this.registerRoute) {
      console.log('Sei registrato');
      this._userLogin.postRegister(this.form.value).subscribe(res => {
        
        this.activate.navigate(['/login'])
      });
    } else {
      console.log('Sei entrato');
      this._userLogin.postLogin(this.form.value).subscribe(console.log); 
    }
  }

  onSubmit() {
    this.form.markAllAsTouched(); 
  }

  onReset(){
    this.form.reset();
  }

}
