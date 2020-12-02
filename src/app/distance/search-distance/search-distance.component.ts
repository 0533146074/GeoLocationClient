import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DistanceService } from '../distance.service';
import { PopularSaerchListComponent } from '../popular-saerch-list/popular-saerch-list.component';

@Component({
  selector: 'app-search-distance',
  templateUrl: './search-distance.component.html',
  styleUrls: ['./search-distance.component.css']
})
export class SearchDistanceComponent implements OnInit {

  searchForm: FormGroup;
  submitted = false;
  origin: string;
  destination: string;
  distance: string;
  disabled: boolean = false;

  constructor(private distanceService: DistanceService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.createValid();

  }

  getDistance() {
    this.disabled = true;
    if (this.searchForm.invalid) {
      this.disabled = false;
      this.submitted = true;
      return;
    }
    else {
      this.distanceService.getDistance(this.origin, this.destination).subscribe(x => {
        if (x != null) {
          this.distance = x;
          const modalRef = this.modalService.open(PopularSaerchListComponent, { centered: true, backdrop: 'static', keyboard: false });
          modalRef.componentInstance.distance = this.distance;
          modalRef.componentInstance.cdref.detectChanges();
          modalRef.componentInstance.isClose.subscribe(x => {
            this.searchForm.reset();
            this.disabled = false;
          });
        }
        else {
          this.searchForm.reset();
          alert('הנתונים שהכנסת אינם תקינים!!!');
          this.disabled = false;
        }
      });
    }

  }

  createValid() {

    this.searchForm = new FormGroup({
      'origin': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'destination': new FormControl('', [Validators.required, Validators.minLength(3)])
    });

  }

}




