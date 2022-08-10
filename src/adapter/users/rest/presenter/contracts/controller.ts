import { IUserDtoInput } from "usecases/system/dtos/user-dto";
import { HttpResponse } from "./http";

export interface Controller{
  handle(data:IUserDtoInput): Promise<HttpResponse>
}