import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly model: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly make: string;

  @IsNumber()
  @MaxLength(4)
  readonly year: number;
}
