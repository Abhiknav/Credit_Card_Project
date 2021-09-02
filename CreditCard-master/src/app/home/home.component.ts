import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
 CardNumber : string = '';
 CardHolder: string = '';
 ExpiresMM: string = '';
 ExpiresYY: string = '';
 cvv: string = '';
 hash:string = '#### #### #### ####';
 numbererror: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let yr = document.getElementById('year');
    let currentYr = (new Date()).getFullYear();
    for(let i = currentYr;i<=currentYr+30;i++){
      let option = document.createElement("OPTION");
      option.innerHTML = i.toString();
      yr?.appendChild(option);
    }
    let cardNumber = document.getElementById('cardNumber');
    cardNumber?.addEventListener('keyup',()=>{
      setTimeout(() => {
        this.keyPress(cardNumber);
      }, 100);

    });
  }
  cardClicked() {
    $('.card').toggleClass('flipped');
  }

  keyPress(event: any) {
    this.hash = '#### #### #### ####';
    let val = event.value;         
    let newval = '';         
    val = val.replace(/\s/g, ''); 
    for(let i = 0; i < val.length; i++) {             
      if(i%4 == 0 && i > 0) {
        newval = newval.concat(' ');
      }  
      newval = newval.concat(val[i]);         
    }        
     this.CardNumber = newval;
     this.hash = this.CardNumber.concat(this.hash.slice(this.CardNumber.length));
      return true;
    
    
}
}
   

