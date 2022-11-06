import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/services/authentication-services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { }
  emailRegex= /^\S+@\S+\.\S+$/

  async userLogin(item: any) {

    if (item.valid) {
      await (
        await login(this.http, item.value)
      ).subscribe((res: any) => {

        if (res) {
          localStorage.setItem('jwt', res.token);
            location.href = '/home';
        } else {
          alert("Login Failed");
        }
      },(err:any)=>{alert(err.message)
      })
    }
    else {
      event?.preventDefault()
    }

  }

  ngOnInit(): void {}
}