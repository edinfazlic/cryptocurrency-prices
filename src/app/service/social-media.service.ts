import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SocialMediaService {

  private readonly IMAGE_PATH = '/assets/img/screenshot.png';

  constructor(private metaService: Meta,
              @Inject(DOCUMENT) private document: Document) {
  }

  public init() {
    const domain = document.location.origin;
    this.metaService.updateTag({ property: 'og:image', content: domain + this.IMAGE_PATH});
    this.metaService.updateTag({ property: 'og:title', content: 'Cryptocurrency prices tracking application'});
  }
}
