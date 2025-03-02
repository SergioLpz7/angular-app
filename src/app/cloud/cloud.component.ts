import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cloud',
    imports: [],
    templateUrl: './cloud.component.html',
    styleUrl: './cloud.component.css'
})
export class CloudComponent {
  @Input() fillColor: string = 'blue';
  @Input() text: string = '';
  @Input() colorT: string = 'white'
}
