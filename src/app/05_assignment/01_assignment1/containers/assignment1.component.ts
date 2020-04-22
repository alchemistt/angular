import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  
    clickMessage :string = '';
  
    onClickMe(e) {
      
      this.clickMessage = "HI "+e.value +"\n"+"welcome" ;
      
      
    }
    value = '';
    
  onKey(value: string) {
    this.value="Hi " +  value +" welcome to freshers node assingment ";
  
  }
  
   fun(x) {
    console.log(x.data);
    if(x.data!== null)    
    this.clickMessage = this.clickMessage+x.data 
    
    else 
    this.clickMessage = this.clickMessage.substring(0, this.clickMessage.length - 1); 
  }
  }
