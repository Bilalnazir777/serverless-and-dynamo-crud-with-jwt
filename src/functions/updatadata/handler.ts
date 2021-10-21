import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { UpdateName } from "../../common/dynamodb"


const UpdateItem: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const { age } = event.body
  const { id } = event.queryStringParameters

  const NewData = {
    age,
    id
  }
  const ReturnedUpdatedData = await UpdateName(NewData)
  return formatJSONResponse({
    body: ReturnedUpdatedData,
    Message: "data is updated to db"
  });
}
export const main = middyfy(UpdateItem);
