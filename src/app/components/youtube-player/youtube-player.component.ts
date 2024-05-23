import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  standalone: true,
  imports: [YouTubePlayerModule, YoutubePlayerComponent, CommonModule]
})
export class YoutubePlayerComponent implements OnInit {
  ngOnInit() {
    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/watch?v=';
    // document.body.appendChild(tag);
  }
  @Input() videoQuality: string = '';
  @Input() videoId: string = '';
  @Input() videoUrl: string = `https://www.youtube.com/embed/${this.videoId}`;
  @Input() width: number = 0;
  @Input() height: number = 0;
  sanitizedUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoUrl'] && this.videoUrl) {
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    }
  }
}
