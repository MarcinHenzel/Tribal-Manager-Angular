import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: Observable<any[]>;
  constructor(firestore: AngularFirestore, private http: HttpClient) {
    /* firestore.collection('Users').add({name: 'Marek', surname: 'Kopytko'}); */
  }
}
