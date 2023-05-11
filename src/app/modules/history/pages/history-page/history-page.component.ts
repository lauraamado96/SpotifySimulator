import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  
  listResults$: Observable<any> = of([])
  src: string = ''

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    
  }

  receiveData(event: string): void {
    console.log(' --> Estoy en el padre...', event)
    this.listResults$ = this.searchService.searchTracks$(event)
    this.src = event; 
  }
  
}
