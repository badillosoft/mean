import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email : String, password : String) {
    const data = {
      correo: email,
      contraseña: password
    };

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    return fetch("http://localhost:5000/auth/login", options)
      .then(response => {
        if (response.status !== 200) {
          return response.text().then(err => Promise.reject(err));
        }
        return response.json();
      }).then(result => {
        console.log(result);
        localStorage.setItem("token", result.token);
        return result.token;
      }).catch(err => {
        console.log(`Error: ${err}`);
        return Promise.reject(err);
      });
  }

}
