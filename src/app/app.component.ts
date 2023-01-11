import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jiomart';
  constructor(){
    
  }

  clickedComponent :any;
  visible: boolean=true;

  assignComponent(component){
    this.visible=false;
    if(component==='admin'){
      this.clickedComponent= AdminComponent;
    }else if(component==='user'){
      this.clickedComponent= UserComponent;
    }
  }
}
