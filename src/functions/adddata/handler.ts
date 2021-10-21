import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { save } from "../../common/dynamodb"
const { v4 } = require('uuid')

const AddData: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {


  const { Customername, age } = event.body

  const id = v4()

  const NewData = {
    Customername,
    age,
    id,

  }


  await save(NewData)
  return formatJSONResponse({
    body: NewData,
    Message: "data is added to db"
  });
}

export const main = middyfy(AddData);
