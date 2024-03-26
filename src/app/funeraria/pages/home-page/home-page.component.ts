import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isChatOpen: boolean = false;
  message: string = '';

  openChat(): void {
    this.isChatOpen = true;
  }

  closeChat(): void {
    this.isChatOpen = false;
  }

  get whatsappLink() {
    const phoneNumber = '944431024';
    const encodedMessage = encodeURIComponent(this.message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  }

  sendMessage(event: MouseEvent): void {

    event.preventDefault();
    // Redireccionar al enlace de WhatsApp con el mensaje
    window.open(this.whatsappLink, '_blank');
  }
}
