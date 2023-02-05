import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InstrumentService } from 'src/app/services/instrument.service';
import { Instrument } from 'src/app/shared/models/Instrument';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent {
  
  instruments: Instrument[] = [];
  constructor(private foodService: InstrumentService, activatedRoute: ActivatedRoute) {
    let instrumentObservable:Observable<Instrument[]>;
    activatedRoute.params.subscribe((params) => {
        instrumentObservable = foodService.getAll();

        instrumentObservable.subscribe((instrumentsXyz) => {
          this.instruments = instrumentsXyz;
          console.log(instrumentsXyz)
        })
    })
  }


}
