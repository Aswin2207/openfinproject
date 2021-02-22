import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openfin';
  income=0;
  expense=0;
  montvalue="6 Months";
  months=[{id:1,value:"6 Months"},{id:1,value:"12 Months"},{id:1,value:"18 Months"}];
  cards=[{id:1,img:"assets/images/Get Paid Instantly.png",label:"Quick cash disimbursement",description:"Get terms loans that your business needs within 72 hrs"},
  {id:2,img:"assets/images/Low interest rate.png",label:"Low-intrest rate",description:"Acheive your financial goals with an amazing intrest rate starting at 13% per annum"},
  {id:3,img:"assets/images/Secure Payments.png",label:"Zero paperwork",description:"Get started instantlyby submitting only your basic details& bank statements"},
  {id:4,img:"assets/images/freelancer_feature.png",label:"Ace your business finances",description:"Manage banking,accounting & everything in between, on one platform"},
  {id:5,img:"assets/images/Covid.png",label:"Loans to fight COVID-19",description:"Zero EMI for first 3 months on back-to-Business loans of upto 1 lakh"}];

 constructor(){

 }
   incomeChange(event,id){
   console.log(id)
   if(id==1)
   this.income=event.value;
   else
   this.expense=event.value;
  }
}
