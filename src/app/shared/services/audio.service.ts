import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio = new Audio();

  constructor() { }
  play(filePath: string) {
    this.audio.src = filePath;
    this.audio.load();
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }
}
