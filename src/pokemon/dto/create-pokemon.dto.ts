import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator"

export class CreatePokemonDto {

    @IsPositive()
    @IsInt()
    @Min(1)
    public no: number

    @IsString()
    @MinLength(1)
    public name: string
}
