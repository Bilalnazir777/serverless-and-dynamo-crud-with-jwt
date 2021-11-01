
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { simpleauth } from "../../common/dynamodb"


const authorization = async (event) => {


    const Customername = event.body




    const token = await simpleauth(Customername)

    return formatJSONResponse({
        Tokengenerated: token,
        Message: "token issued"
    });
}

export const main = middyfy(authorization);
