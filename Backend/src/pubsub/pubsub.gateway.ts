import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class PubsubGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    return data;
  }
}
