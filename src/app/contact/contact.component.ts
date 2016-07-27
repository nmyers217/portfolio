import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
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
    sendingAJAX: boolean = false;
    AJAXfinished: boolean = false;
    requestSuccess: boolean = false;
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
        this.sendingAJAX = true;

        this.cs.formSpreePost(this.contactForm.value)
            .subscribe(res => {
                console.log(res);

                this.sendingAJAX = false;
                this.requestSuccess = res.success ? true : false;
                this.AJAXfinished = true;
            });
    }
}
