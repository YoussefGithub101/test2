import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ClipboardModule , QRCodeModule , ButtonModule,TooltipModule,MessagesModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  value = "www.tazkty.com/473847"
}
