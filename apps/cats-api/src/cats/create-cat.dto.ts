import { IsString } from 'class-validator';

export class CreateCatDto {
  id: string;

  @IsString()
  name: string;
}
