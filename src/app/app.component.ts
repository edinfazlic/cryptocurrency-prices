import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialMediaService } from './service/social-media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {


  constructor(private socialMediaService: SocialMediaService) {
    this.socialMediaService.init();
  }
}
