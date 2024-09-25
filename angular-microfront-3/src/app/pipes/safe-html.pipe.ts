import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  /**
   * Creates an instance of safe html pipe.
   * @param {DomSanitizer} sanitizer 
   */
  constructor(protected sanitizer: DomSanitizer) {}

  /**
   * Transforms safe html pipe
   * @param {any} value 
   * @returns transform 
   */
  public transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
