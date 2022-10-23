import {Component, Optional} from '@angular/core';
import {FooterComponent as BaseComponent} from '../../../../app/footer/footer.component';
import {KlaroService} from '../../../../app/shared/cookies/klaro.service';

@Component({
  selector: 'ds-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})

export class FooterComponent extends BaseComponent{
  showTopFooter = true;
}
