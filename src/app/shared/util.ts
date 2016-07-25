import { ElementRef } from '@angular/core';

export class Util {
    public static addScriptToDOM(path: string, ref: ElementRef): void {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = path;
        ref.nativeElement.appendChild(s);
    }
}