import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

type ContactFormControls = {
  nombre: FormControl<string>;
  email: FormControl<string>;
  asunto: FormControl<string>;
  mensaje: FormControl<string>;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm!: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      nombre: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      asunto: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      mensaje: this.fb.control('', [Validators.required, Validators.minLength(10)])
    });
  }

  // 👉 Solución al problema
  get f(): ContactFormControls {
    return this.contactForm.controls as ContactFormControls;
  }

  cancelar() {
    if (this.submitting) return;
    this.contactForm.reset();
  }

  enviar() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.submitting = true;

    const payload = {
      nombre: this.f.nombre.value,
      email: this.f.email.value,
      asunto: this.f.asunto.value,
      mensaje: this.f.mensaje.value,
      createdAt: new Date().toISOString()
    };

    const text = JSON.stringify(payload, null, 2);
    const blob = new Blob([text], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'contacto.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    this.contactForm.reset();
    this.submitting = false;
  }
}
