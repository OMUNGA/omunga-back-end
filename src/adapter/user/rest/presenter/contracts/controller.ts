import { HttpRequest, HttpResponse } from "./http";

export interface IController{
  handle(data:HttpRequest): Promise<HttpResponse>
}