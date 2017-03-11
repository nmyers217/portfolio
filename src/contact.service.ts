import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
    constructor(private http: Http) { }

    formSpreePost(formData) {
        const url = 'https://formspree.io/nickbmyers217@gmail.com';
        const data = {
            message: `
Subject: ${formData.subject}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

${formData.message}
            `
        }

        return this.http.post(url, data)
            .map(res => res.json())
    }
}
