import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';
import { PopularSearch } from './distance.model';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor(private generalService: GeneralService) { }

  getDistance(origin: string, destination: string) {
    return this.generalService.get<string>(`distance?origin=${origin}&destination=${destination}`);
  }

  getPopularSearch() {
    return this.generalService.get<PopularSearch>(`popular-search`);
  }

  getPopularSearchList() {
    return this.generalService.get<PopularSearch[]>(`popular-search-list`);
  }

}
