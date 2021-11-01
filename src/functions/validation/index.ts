import { handlerPath } from "@libs/handlerResolver";


export const simpleauth = {
    handler: `${handlerPath(__dirname)}/handler.verifier`
}