import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;
  password: any;
  email: any;
  constructor(private Auth: AuthService, public af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  /*   onSubmit(target: HTMLElement) {
      const login = target.querySelector('#login');
      const password = target.querySelector('#password');
      console.log(login, password); */
  /*       ,
          {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
          } */
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
          console.log(success);
          /* this.router.navigate(['/members']); */
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          })
    }
  }
}
