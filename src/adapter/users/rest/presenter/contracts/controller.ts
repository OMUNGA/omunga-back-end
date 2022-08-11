import { HttpRequest, HttpResponse } from "./http";

export interface Controller{
  handle(data:HttpRequest): Promise<HttpResponse>
}