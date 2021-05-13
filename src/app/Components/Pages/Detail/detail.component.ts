import {Component,OnInit} from "@angular/core";
import { BdscService } from '../../../Services/bds.module';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    templateUrl : 'detail.component.html',
    styleUrls: ['detail.component.css'],
    selector: 'detail',
    providers: [BdscService]
})

export class DetailComponent  implements OnInit{

    currentBds = null;
    image=null;
    active='active';
    message = '';
    constructor(private bdsidSevrice: BdscService,
                private route: ActivatedRoute,
                private router: Router){}
    

    ngOnInit(): void {
        this.message = '';
        this.getTutorial(this.route.snapshot.paramMap.get('id'));
       
    }

    getTutorial(id): void {
        this.bdsidSevrice.get(id)
        .subscribe(
        data => {
            this.currentBds = data;
            this.image=data.image;
            console.log(this.currentBds.lienhe);
        },
        error => {
            console.log(error);
        });
    }
    trackByMethod(index, item){
        return item.id;
    }
}
