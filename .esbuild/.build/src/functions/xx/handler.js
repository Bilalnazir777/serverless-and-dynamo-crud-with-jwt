var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/functions/xx/handler.ts
__export(exports, {
  simpleauth: () => simpleauth
});
var simpleauth = async (event) => {
  return {
    principalId: "bilalnazir",
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
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  simpleauth
});
//# sourceMappingURL=handler.js.map
