import { Component
       , OnInit
       , AfterViewInit
       , ElementRef
       } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Under Construction!';

  constructor(private elementRef: ElementRef) {};

  ngOnInit() {
  }

  ngAfterViewInit() {
    // TODO: Is there a better way to load these modules
    // into the DOM after the component?
    // They are pretty old and don't follow any module conventions
    this.addScriptToDOM('js/particles.min.js');
    this.addScriptToDOM('js/particlesRun.js');

    // TODO: Pull this code into the component
    // this will improve encapsulation and
    // seperation of concerns blah blah blah
    this.addScriptToDOM('js/main.js');
  }

  private addScriptToDOM(path: string): void {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = path;
    this.elementRef.nativeElement.appendChild(s);
  }
}
