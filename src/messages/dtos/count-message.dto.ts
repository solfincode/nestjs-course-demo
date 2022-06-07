import { IsInt } from 'class-validator';

export class countMessageDto {
  //validate reqBody whether it is string or not
  @IsInt()
  count: number;
}
