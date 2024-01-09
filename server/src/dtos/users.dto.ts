import { IsEmail, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  public firstName!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  public lastName!: string;

  @IsNumber()
  public phoneNumber!: number;

  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9-_.@]+$/)
  @MinLength(3)
  @MaxLength(32)
  public username?: string;
}
