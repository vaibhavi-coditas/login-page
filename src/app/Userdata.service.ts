import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { 
    console.log('ON INIT user service');
  }

  saveUser(user: any) {
    const tempList = this.fetchFromLocalStorage();
    console.log(tempList);
    tempList.push(user);
    this.storeInLocalStorage(JSON.stringify(tempList));
  }


  verifyUser(user: any) {
    const tempList = this.fetchFromLocalStorage();
    const result = tempList.find((item:any) => {
      let found = false
      if (item.userName === user.userName && item.password === user.password) {
        found = true;
      }
      return found;
    });
    return result;
  }

  storeInLocalStorage(List:any) {
    localStorage.setItem('userList',List);
  }

  fetchFromLocalStorage() {
    const temp = localStorage.getItem('userList');
    return temp ? JSON.parse(temp) : [];
  }

}
