// consulta-pico-placa.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PicoPlacaService } from '../pico-placa.service';
@Component({
  selector: 'app-consulta-pico-placa',
  templateUrl: './consulta-pico-placa.component.html',
  styleUrls: ['./consulta-pico-placa.component.css']
})
export class ConsultaPicoPlacaComponent {

  form: FormGroup;
  resultado: string = '';

  constructor(private fb: FormBuilder, private picoPlacaService: PicoPlacaService) {
    this.form = this.fb.group({
      plateNumber: '',
      dateTime: ''
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.picoPlacaService.consultarPicoPlaca(formData.plateNumber, formData.dateTime)
      .subscribe(
        (response: string) => {
          console.log('Respuesta del servidor:', response);
          this.resultado = response;
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          this.resultado = error.error;
        }
      );
  }
}
