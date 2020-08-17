/*import {Injectable } from '@angular/core';
import { HttpClient , HttpClientModule ,HttpHeaders} from '@angular/common/http'; 
import { Observable,of,throwError ,pipe} from 'rxjs';
import {map ,filter ,catchError mergeMap } from 'rxjs/operators';
import {customer} from '../app/models/Customer.Model';

@Injectable({
    providedIn: 'root'
})
export class CustomerSever{
    public apiURL:string ="http://locallhost:64506/api/customer"
    constructor(protected httpClient :HttpClient){}

// create = c
insertCustomer(inputCustomer :Customer){
    return this.httpClient.post(this.apiURL,inputCustomer)
    .pipe()
}

}*/

