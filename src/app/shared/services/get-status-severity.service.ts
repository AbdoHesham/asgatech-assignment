import { Injectable } from '@angular/core';
import { VisitRequeststatusEnum } from 'src/app/core/Models/pageType';

@Injectable({
  providedIn: 'root'
})
export class GetStatusSeverityService {

  getStatusSeverity(status: VisitRequeststatusEnum) {
    switch (status) {
      case VisitRequeststatusEnum.New:
        return 'success';
      case VisitRequeststatusEnum.Confirmed:
        return 'warning';
      case VisitRequeststatusEnum.Canceled:
        return 'danger';
    }
  }

}
