import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { DeleteOne } from "../../common/dynamodb"


const DeleteItem: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const { id } = event.queryStringParameters
  await DeleteOne(id)
  return formatJSONResponse({

    Message: "item deleted succesfully"
  });
}

export const main = middyfy(DeleteItem);
