


const jwt = require('jsonwebtoken')

export const verifier = async (event) => {
    const bearerheader: any = event['authorization']
    if (bearerheader != undefined) {
        var bearer = bearerheader.split(' ')
        const bearertoken = bearer[1]
        const decoded = jwt.verify(bearertoken, 'bilalnazir')
        console.log(decoded)
        return {

            principalId: "yasirhakur",
            policyDocument: {
                Version: "2012-10-17",
                Statement: [
                    {
                        Resource: ["*"],
                        Effect: "Allow",
                        Action: "execute-api:Invoke"
                    }
                ]
            }
        }
    }
    else {
        return {
            principalId: "yasirhakur",
            policyDocument: {
                Version: "2012-10-17",
                Statement: [
                    {
                        Resource: ["*"],
                        Effect: "Allow",
                        Action: "execute-api:Invoke"
                    }
                ]
            }
        }
    }
}
