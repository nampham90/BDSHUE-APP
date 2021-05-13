import {Component} from "@angular/core";
import { BdscService } from "../../../Services/bds.module";





@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    selector:'home',
    providers: [BdscService]
})

export class HomeComponent{
    bds : any;

    constructor(private bdsSevrice:BdscService){}
    totalLength: any;
    page: number=1;


    ngOnInit():void{
        this.retrieveBsd();
    }

    retrieveBsd():void{
        this.bdsSevrice.getAll()
           .subscribe(data=>{
               this.bds=data;
               this.totalLength=data.length;
               console.log(data);
           },
           error=>{
               console.log(error);
           })
    }
}