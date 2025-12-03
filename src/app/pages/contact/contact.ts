import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Contact {

  contactForm: FormGroup<{
    email: FormControl<string | null>;
    nombre: FormControl<string | null>;
    telefono: FormControl<string | null>;
    mensaje: FormControl<string | null>;
  }>;

  submitting = false;

  constructor() {
    this.contactForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: false
      }),
      nombre: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
        nonNullable: false
      }),
      telefono: new FormControl('', {
        validators: [Validators.required, Validators.minLength(7)],
        nonNullable: false
      }),
      mensaje: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10)],
        nonNullable: false
      }),
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  enviar() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.submitting = true;

    const payload = {
      email: this.f.email.value,
      nombre: this.f.nombre.value,
      telefono: this.f.telefono.value,
      mensaje: this.f.mensaje.value,
      createdAt: new Date().toISOString()
    };

    // 🔥 **DESCARGAR JSON**
    const text = JSON.stringify(payload, null, 2);
    const blob = new Blob([text], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'contacto.json';
    link.click();

    window.URL.revokeObjectURL(url);

    this.submitting = false;
    this.contactForm.reset();
  }
}
