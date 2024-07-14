import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    public messageService: MessageService  ) {}
  showMessage(severity = 'success', content,Altseverity?) {

    this.messageService.add({ severity:Altseverity!=null?Altseverity: severity, summary: severity, detail: content, life: 7000 });
  }
}
