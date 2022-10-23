import { Component } from '@angular/core';
import { FeedbackComponent as BaseComponent } from '../../../../../app/info/feedback/feedback.component';

@Component({
  selector: 'ds-feedback',
  styleUrls: ['./feedback.component.scss'],
  templateUrl: './feedback.component.html'
})

/**
 * Component displaying the feedback Statement
 */
export class FeedbackComponent extends BaseComponent { }
