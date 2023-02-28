import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsString()
  weight_imperial: string;

  @IsString()
  weight_metric: string;

  @IsString()
  original_id: string;

  @IsString()
  origin: string;

  @IsString()
  country_code: string;

  @IsString()
  description: string;

  @IsString()
  life_span: string;

  @IsInt()
  indoor: number;

  @IsInt()
  lap: number;

  @IsString()
  alt_names: string;

  @IsString()
  temperament: string;
}
