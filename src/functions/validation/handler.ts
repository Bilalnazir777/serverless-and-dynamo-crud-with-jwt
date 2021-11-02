const jwt = require('jsonwebtoken')

export const verifier = async (event) => {
    console.log(event)
    const bearerheader: any = event['authorizationToken']

    if (bearerheader != "" || bearerheader != undefined) {
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
                        Effect: "Deny",
                        Action: "execute-api:Invoke"
                    }
                ]
            }
        }
    }
}

// try {
//     er(-1)
// } catch (bilal) {
//     console.log(bilal);
// }

// function er(e) {
//     if (e < 0)
//         throw new Error('sds')
//     else return 'ok'
// }