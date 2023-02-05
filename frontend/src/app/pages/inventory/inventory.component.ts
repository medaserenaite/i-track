import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Instrument } from 'src/app/shared/models/Instrument';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  @Input() instruments: Instrument[] = [];
  
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
