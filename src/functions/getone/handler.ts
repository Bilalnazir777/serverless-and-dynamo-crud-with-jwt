import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { GetOne } from "../../common/dynamodb"


const SingleItem: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const { id } = event.queryStringParameters
  const Item = await GetOne(id)
  return formatJSONResponse({
    body: Item,

  });
}

export const main = middyfy(SingleItem);
