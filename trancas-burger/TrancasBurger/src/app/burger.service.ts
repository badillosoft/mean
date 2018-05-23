import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor() { }

  async create(burger: any) {
    const url = `https://api.mlab.com/api/1/databases/mean-mx/collections/burgers?apiKey=ayRRQWTsfrXOpE8za6m5FlXBXXPytqSf`;

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(burger)
    };

    const response = await fetch(url, options);

    if (response.status !== 200) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    return result;
  }

}
