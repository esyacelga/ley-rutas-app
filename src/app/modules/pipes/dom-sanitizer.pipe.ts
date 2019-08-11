import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

    constructor(private domSanitize: DomSanitizer) {

    }

    transform(url: string): any {
        const domImg = `background-image: url('${url}')`;
        return this.domSanitize.bypassSecurityTrustStyle(domImg);
    }

}
