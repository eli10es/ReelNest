import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });

    // emailjs.init({
    //   publicKey: 'YOUR_PUBLIC_KEY',
    //   // Do not allow headless browsers
    //   blockHeadless: true,
    //   blockList: {
    //     // Block the suspended emails
    //     list: ['foo@emailjs.com', 'bar@emailjs.com'],
    //     // The variable contains the email address
    //     watchVariable: 'userEmail',
    //   },
    //   limitRate: {
    //     // Set the limit rate for the application
    //     id: 'app',
    //     // Allow 1 request per 10s
    //     throttle: 10000,
    //   },
    // });
  }

  onSend(e: Event) {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
