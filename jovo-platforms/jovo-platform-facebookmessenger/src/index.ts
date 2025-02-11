import { MessengerBot } from './core/MessengerBot';
import { SenderActionType } from './Enums';
import { Message } from './responses/Message';
import { AttachmentMessageOptions } from './responses/messages/AttachmentMessage';
import { TextMessageOptions } from './responses/messages/TextMessage';
import { AirlineTemplateOptions } from './responses/templates/AirlineTemplate';
import { ButtonTemplateOptions } from './responses/templates/ButtonTemplate';
import { GenericTemplateOptions } from './responses/templates/GenericTemplate';
import { MediaTemplateOptions } from './responses/templates/MediaTemplate';
import { ReceiptTemplateOptions } from './responses/templates/ReceiptTemplate';

export { FacebookMessenger, Config } from './FacebookMessenger';

export const HOST = 'graph.facebook.com';
export const BASE_PATH = '/v5.0/me';

declare module 'jovo-core/dist/src/Jovo' {
  export interface Jovo {
    $messengerBot?: MessengerBot;

    messengerBot(): MessengerBot;

    isMessengerBot(): boolean;

    text(options: TextMessageOptions): Jovo;
    attachment(options: AttachmentMessageOptions): Jovo;

    airlineTemplate(options: AirlineTemplateOptions): Jovo;
    buttonTemplate(options: ButtonTemplateOptions): Jovo;
    genericTemplate(options: GenericTemplateOptions): Jovo;
    mediaTemplate(options: MediaTemplateOptions): Jovo;
    receiptTemplate(options: ReceiptTemplateOptions): Jovo;

    action(action: SenderActionType): Promise<boolean>;
  }
}

declare module 'jovo-core/dist/src/Interfaces' {
  export interface Output {
    FacebookMessenger: {
      Messages: Message[];
    };
  }
}

export * from './Interfaces';
export * from './Enums';
export * from './core/MessengerBot';
export * from './core/MessengerBotRequest';
export * from './core/MessengerBotResponse';
export * from './core/MessengerBotSpeechBuilder';
export * from './core/MessengerBotUser';
export * from './core/FacebookMessengerRequestBuilder';
export * from './core/FacebookMessengerResponseBuilder';

export * from './helpers/HTTPS';

export * from './modules/FacebookMessengerCore';

export * from './responses/Button';
export * from './responses/Message';
export * from './responses/SenderAction';
export * from './responses/Template';

export * from './responses/buttons/CallButton';
export * from './responses/buttons/LinkButton';
export * from './responses/buttons/LoginButton';
export * from './responses/buttons/PostbackButton';

export * from './responses/messages/AttachmentMessage';
export * from './responses/messages/TextMessage';

export * from './responses/quick-replies/BuiltInQuickReply';
export * from './responses/quick-replies/TextQuickReply';

export * from './responses/templates/AirlineTemplate';
export * from './responses/templates/ButtonTemplate';
export * from './responses/templates/GenericTemplate';
export * from './responses/templates/MediaTemplate';
export * from './responses/templates/ReceiptTemplate';
