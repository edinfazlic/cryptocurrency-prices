import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-cryptocurrency-details',
  templateUrl: './cryptocurrency-details.component.html',
  styleUrls: ['./cryptocurrency-details.component.scss']
})
export class CryptocurrencyDetailsComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // this.sub = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.id = +params['id'];
    //   })
    // );
  }
}
