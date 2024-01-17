import { Component, Inject, Input, OnInit } from '@angular/core';
import { SEARCH_CONFIG_SERVICE } from '../../../../my-dspace-page/my-dspace-page.component';
import { Context } from '../../../../core/shared/context.model';
import { SearchConfigurationService } from '../../../../core/shared/search/search-configuration.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ViewMode } from '../../../../core/shared/view-mode.model';

@Component({
  selector: 'ds-admin-notify-logs-result',
  templateUrl: './admin-notify-logs-result.component.html',
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService
    }
  ]
})
export class AdminNotifyLogsResultComponent implements OnInit{

  @Input()
  defaultConfiguration: string;

  public selectedSearchConfig$: Observable<string>;

  protected readonly context = Context.CoarNotify;
  constructor(@Inject(SEARCH_CONFIG_SERVICE) public searchConfigService: SearchConfigurationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // override the route reuse strategy to prevent issue on result loading
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.selectedSearchConfig$ = this.searchConfigService.getCurrentConfiguration(this.defaultConfiguration);
  }

  public resetDefaultConfiguration() {
    this.router.navigate([this.getResolvedUrl(this.route.snapshot)], {
      queryParams: {
        configuration: this.defaultConfiguration,
        view: ViewMode.Table,
      },
    });
  }

  /**
   * Get resolved url from route
   *
   * @param route url path
   * @returns url path
   */
  private getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
  }
}
