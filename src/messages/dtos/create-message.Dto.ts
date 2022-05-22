import { IsString } from 'class-validator';

export class createMessageDto {
  //validate reqBody whether it is string or not
  @IsString()
  reqBody: string;
}
