import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  ngOnInit() {
    emailjs.init('x6vXNhP_apfEWPrWb');
  }

  constructor(private cdr: ChangeDetectorRef) {}

  sendEmail() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.status = 'error';
      return;
    }

    this.isSubmitting = true;
    this.status = 'idle';

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      subject: this.form.subject,
      message: this.form.message,
      to_email: 'sigynross@gmail.com',
    };

    emailjs
      .send('service_97lbx4s', 'template_d4zeycy', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.isSubmitting = false;
        this.status = 'success';
        this.cdr.detectChanges();
        this.form = { name: '', email: '', subject: '', message: '' };
        console.log(this.status)
        setTimeout(() => {
          this.status = 'idle';
          this.form = { name: '', email: '', subject: '', message: '' };
        }, 3000);
      })
      .catch((error: any) => {
        this.isSubmitting = false;
        this.status = 'error';
        console.error('FAILED...', error);
        this.cdr.detectChanges();

        setTimeout(() => {
          this.status = 'idle';
          this.cdr.detectChanges();
        }, 5000);
      });
  }
}
