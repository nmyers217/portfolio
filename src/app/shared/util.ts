import { ElementRef } from '@angular/core';

export class Util {
    public static addScriptToDOM(path: string, ref: ElementRef) {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = path;
        return new Promise((resolve, reject) => {
            resolve(ref.nativeElement.appendChild(s));
        });
    }
}