import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
