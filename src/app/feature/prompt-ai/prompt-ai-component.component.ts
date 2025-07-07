import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FEATURE_FLAGS } from '@enums/featureFlags.enum';
import { finalize, tap } from 'rxjs';
import {
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonSpinner
} from '@ionic/angular/standalone';
import { formatResponse } from '@utils/format-response.util';
import { FeatureFlagService } from '@services/feature-flag.service';
import { PromptService } from '@services/prompt-ai.service';

@Component({
  selector: 'app-prompt-ai-component',
  templateUrl: './prompt-ai-component.component.html',
  styleUrls: ['./prompt-ai-component.component.scss'],
  providers: [HttpClient],
  imports: [CommonModule,
    FormsModule,
    IonButton,
    IonInput,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonContent,
    IonSpinner,
  ],
})
export class PromptAiComponent implements OnInit {
  prompt: string = '';
  aiGeminiResponse: string = '';
  aiDeepSeekResponse: string = '';
  aiChatGPTResponse: string = '';
  aiMistralResponse: string = '';
  isLoadingGemini = false;
  isLoadingDeepseek = false;
  isLoadingChatGPT = false;
  isLoadingMistral = false;
  geminiPosition: number = -1;
  deepseekPosition: number = -1;
  chatGPTPosition: number = -1;
  mistralPosition: number = -1;
  position: number = 0;
  medalArray:string[] = ['🥇','🥈','🥉','🏅'];
  featureFlags: any;
  promptSampleText: boolean = false;

  constructor(private featureFlagService: FeatureFlagService,
              private promptService: PromptService) {}

  ngOnInit(): void {
    this.featureFlags = this.featureFlagService.getAllFlags();
  }

  getResponse() {
    this.aiGeminiResponse = '';
    this.aiDeepSeekResponse = '';
    this.aiChatGPTResponse = '';
    this.aiMistralResponse = '';
    this.isLoadingGemini = true;
    this.isLoadingDeepseek = true;
    this.isLoadingChatGPT = true;
    this.isLoadingMistral = true;
    this.promptSampleText = this.featureFlagService.getFlag(FEATURE_FLAGS.PROMPTSAMPLETEXT);

    this.promptService.getGeminiResponse(this.prompt, this.promptSampleText)
    .pipe(finalize(() => {this.isLoadingGemini = false,
                        this.geminiPosition = (this.position++) % 3}))
    .subscribe(res => this.aiGeminiResponse = res || '');

    this.promptService.getDeepseekResponse(this.prompt, this.promptSampleText)
    .pipe(tap(res => console.log(res)),
          finalize(() => {this.isLoadingDeepseek = false,
                          this.deepseekPosition = (this.position++) % 3}))
    .subscribe(res => this.aiDeepSeekResponse = formatResponse(res));

    this.promptService.getMistralResponse(this.prompt, this.promptSampleText)
    .pipe(tap(res => console.log(res)),
          finalize(() => {this.isLoadingMistral = false,
                          this.mistralPosition = (this.position++) % 3}))
    .subscribe(res => this.aiMistralResponse = formatResponse(res));
  }
}
