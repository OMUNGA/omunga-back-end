import { HttpRequest, IController } from "../../adapter/user/rest/presenter/contracts"
import { Request, Response } from "express"

export const adapterRoute = (controller: IController) =>{
  return async (req: Request,res: Response) => {

    const httpRequest: HttpRequest = {
      body: req.body,
      statusCode: 0
    }

    
    const httpResponse = await controller.handle(httpRequest.body)
    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
