import { Component } from '@angular/core';
import { SideNavComponent } from '../../libs/shared/components/side-nav/side-nav.component';
import { MenuComponent } from '../../libs/shared/components/menu/menu.component';
import { BreadcumComponent } from '../../libs/shared/components/breadcum/breadcum.component';
import { FooterComponent } from '../../libs/shared/components/footer/footer.component';
import { CardEaterComponent } from '../../libs/shared/components/card-eater/card-eater.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-guarded',
  standalone: true,
  imports: [SideNavComponent, MenuComponent, BreadcumComponent, FooterComponent, CardEaterComponent, CommonModule],
  templateUrl: './app-guarded.component.html',
  styleUrl: './app-guarded.component.scss'
})
export class AppGuardedComponent {

}
