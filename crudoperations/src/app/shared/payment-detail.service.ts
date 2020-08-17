import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  readonly rootURL :'http://localhost:51888/api/values';
  constructor(private http :HttpClient) { }

  postPaymentDetail(formData :PaymentDetail){
    return this.http.post(this.rootURL + '/PaymentDetail',formData)


  }
}
