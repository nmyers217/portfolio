import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { ContactService } from './contact.service';

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css'],
    providers: [HTTP_PROVIDERS, ContactService]
})
export class ContactComponent implements OnInit {
    requestSent: boolean = false;
    requestFinished: boolean = false;
    requestSuccessful: boolean = false;
    contactForm: ControlGroup;

    constructor(private fb: FormBuilder, private cs: ContactService) {}

    ngOnInit() {
        this.contactForm = this.fb.group({
            subject: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required],
            phone: ['']
        });
    }

    sendMessage(e) {
        this.requestSent = true;

        this.cs.formSpreePost(this.contactForm.value)
            .subscribe(res => {
                console.log(res);

                this.requestSuccessful = res.success ? true : false;
                this.requestFinished = true;
            });
    }
}
