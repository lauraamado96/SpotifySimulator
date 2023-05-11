import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: TrackModel[], src: string | null = null) {

    if (src) {
      return value?.filter(v => v.name.toLowerCase().includes(src.toLowerCase()) || v.artist?.name.toLowerCase().includes(src.toLowerCase()) || v.album.toLowerCase().includes(src.toLowerCase()))
    } else {
      return value
    }

  }

}
