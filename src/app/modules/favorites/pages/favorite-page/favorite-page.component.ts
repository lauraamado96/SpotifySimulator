import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  listResults$: Observable<any> = of([])

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    
  }

  receiveData(event: string): void {
    console.log(' --> Estoy en el padre...', event)
    this.listResults$ = this.searchService.searchTracks$(event)
  }

}
