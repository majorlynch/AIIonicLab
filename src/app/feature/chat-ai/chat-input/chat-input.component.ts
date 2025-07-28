import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CHATSYMBOLGROUPS } from '@constants/chatSymbols';
import { sendOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonItem, IonTextarea, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [IonIcon, IonButton, CommonModule, FormsModule, IonItem, IonTextarea, IonSelect, IonSelectOption],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  @Input() chatPrompt: string = '';
  @Input() isChatLoading: boolean = false;
  @Output() sendMessage = new EventEmitter<string>();

  chatSymbolGroups:string[][];

  constructor() {
    addIcons({ sendOutline });
    this.chatSymbolGroups = CHATSYMBOLGROUPS;
  }

  addSymbol(text: string)
  {
    this.chatPrompt += text;
  }

  sendInput()
  {
    console.log('sendInput '+ this.chatPrompt);
    this.sendMessage.emit(this.chatPrompt);
  }

}
