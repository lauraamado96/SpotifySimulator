import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { __values } from 'tslib';
import * as dataRow from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  @Input() tracks: TrackModel[] = []
  @Input() src: string = ''
  
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRow as any).default
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
  }

}
