import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

import { BdscService } from '../../../Services/bds.module';


@Component({
      templateUrl: 'cate.component.html',
      selector: 'cate',
      providers:[BdscService]

})

export class CateComponent implements OnInit{
    bdskhuvuc=null;
    public khuvuc;
    constructor(
      private bdsidSevrice: BdscService,
      private route: ActivatedRoute,
      private router: Router
    ){}
    totalLength: any;
    page: number=1;

    ngOnInit(): void{
       //this.getKhuvuc(this.route.snapshot.paramMap.get('khuvuc'));
         this.route.paramMap.subscribe((params: ParamMap)=>{
               this.khuvuc=params.get('khuvuc');
               console.log(this.khuvuc);
               this.getKhuvuc(this.khuvuc);
         });
    }
    getKhuvuc(khuvuc): void{

       this.bdsidSevrice.getKhuvuc(khuvuc)
       .subscribe(data=>{
             this.bdskhuvuc=data;
             this.totalLength=data.length;
             console.log(data);
       },err=>{
             console.log(err);
       })
    }

}