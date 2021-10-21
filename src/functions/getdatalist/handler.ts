import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { getalldata } from "../../common/dynamodb"


const GetList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {


  const DataList = await getalldata()
  return formatJSONResponse({
    body: DataList,

  });
}

export const main = middyfy(GetList);
