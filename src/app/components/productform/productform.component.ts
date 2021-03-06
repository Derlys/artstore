import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { Product } from '../../models/product.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { APP_CONFIG, AppConfig } from '../../app.module';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Product>;
  fg: FormGroup;
  minLongitud = 3;
  searchResult: string[];

  constructor(
    fb: FormBuilder,
    @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig
  ) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: [
        '',
        Validators.compose([
          Validators.required,
          this.nombreValidator,
          this.nombreValidatorParametrizable(this.minLongitud),
        ]),
      ],
      url: [''],
    });
    this.fg.valueChanges.subscribe((form: any) => {});
  }

  ngOnInit() {
    const elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter((text) => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((text: string) =>
          ajax(this.config.apiEndpoint + '/ciudades?q=' + text)
        )
      )
      .subscribe((ajaxResponse) => (this.searchResult = ajaxResponse.response));
  }

  guardar(nombre: string, url: string): boolean {
    const d = new Product(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
  nombreValidator(control: FormControl): { [s: string]: boolean } {
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5) {
      return { invalidNombre: true };
    }
    return null;
  }

  nombreValidatorParametrizable(minLong: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLong) {
        return { minLongNombre: true };
      }
      return null;
    };
  }
}
