
import { handlerPath } from '@libs/handlerResolver';

export const simpleauthorization = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'authorizinguser',
            }
        }
    ]
}
