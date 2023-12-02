import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NzButtonModule, NzToolTipModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input() public tooltipText: string;
  @Input() public isViewerDisabled: boolean = true;
}
