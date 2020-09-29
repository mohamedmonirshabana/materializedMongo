import {  IsOptional, IsString, IsNumber, } from 'class-validator';
// import {isEmpty ,IsNotEmpty, isString, Matches} from 'class-validator';

export class CreateItemdto{
    @IsString()
    name ;

    @IsNumber()
    price ;

    @IsString()
    parent;

    @IsString()
    category;

    @IsString()
    @IsOptional()
    details;

    

}