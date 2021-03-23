import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';

@Injectable()
export class ChatService {

  // readonly token = environment.dialogflow.eDentistChatbot;
  // readonly client = new ApiAiClient({accessToken: this.token});

  constructor() {
  }

  // tslint:disable-next-line:typedef
  talk() {
    // this.client.textRequest('Hi')
    //   .then(res => console.log(res));
  }
}
