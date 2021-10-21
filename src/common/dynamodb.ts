

const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient()
//saving data to database
export const save = async (NewData) => {
    const DataToAdd = await dynamodb.put({
        TableName: 'TypescriptTable',
        Item: NewData
    }).promise()
    return DataToAdd;
}

//getting all data list

export const getalldata = async () => {
    let DataList;
    const List = await dynamodb.scan({ TableName: "TypescriptTable" }).promise()
    DataList = List.Items
    return DataList
}

//getting one item byy id

export const GetOne = async (id) => {
    const SingleItem = await dynamodb.get(
        {
            TableName: "TypescriptTable",
            Key: { id }
        }).promise()
    return SingleItem
}
//delete item
export const DeleteOne = async (id) => {
    const DeleteItem = await dynamodb.delete(
        {
            TableName: "TypescriptTable",
            Key: { id }
        }).promise()
    return DeleteItem
}

//update an item

export const UpdateName = async (NewData) => {
    const DataToAdd = await dynamodb.update({
        TableName: 'TypescriptTable',
        Key: { id: NewData.id },
        UpdateExpression: "set age = :anything",
        ExpressionAttributeValues: {
            ':anything': NewData.age
        }

    }).promise()
    return DataToAdd;
}
