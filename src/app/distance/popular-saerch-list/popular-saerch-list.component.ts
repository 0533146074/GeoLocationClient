import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopularSearch } from '../distance.model';
import { DistanceService } from '../distance.service';


@Component({
  selector: 'app-popular-saerch-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './popular-saerch-list.component.html',
  styleUrls: ['./popular-saerch-list.component.css']
})


export class PopularSaerchListComponent implements OnInit {

  @Input() distance: string;
  @Output() isClose: EventEmitter<boolean> = new EventEmitter();

  popularSearch: PopularSearch = new PopularSearch();
  popularSearchList: PopularSearch[] = [];

  constructor(private activeModal: NgbActiveModal, public cdref: ChangeDetectorRef, private distanceService: DistanceService) { }

  ngOnInit(): void {

    console.log(this.distance);

    this.distanceService.getPopularSearch().subscribe(x => {
      console.log(x);
      this.popularSearch = x;
    });

    this.distanceService.getPopularSearchList().subscribe(x => {
      console.log(x);
      this.popularSearchList = x;
    });

  }

  close() {
    this.activeModal.close();
    this.isClose.emit(true);
  }

}


