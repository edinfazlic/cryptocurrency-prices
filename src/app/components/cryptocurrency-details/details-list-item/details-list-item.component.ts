import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-list-item',
  templateUrl: './details-list-item.component.html',
  styleUrls: ['./details-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsListItemComponent {
  @Input() label: string;
  @Input() value: string;
}
