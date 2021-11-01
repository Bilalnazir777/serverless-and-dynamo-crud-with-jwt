import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import AddData from '@functions/adddata';
import GetList from '@functions/getdatalist';
import SingleItem from '@functions/getone';
import UpdateItem from '@functions/updatadata'
import DeleteItem from '@functions/deleteitem'
import { simpleauth } from '@functions/index'
import { simpleauthorization } from '@functions/index'


const serverlessConfiguration: AWS = {
  service: 'serverless-with-typescirpt',
  frameworkVersion: '2',
  custom: {
    dynamodb: {
      stages: ['dev'],
      start: {
        port: 8000,
        migrate: true,
        seed: true
      }
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
    },
  },
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dynamodb-local'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-2',
    iamRoleStatements:
      [
        {
          Effect: 'Allow',
          Action: '*',
          Resource: '*'

        }
      ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
  },
  resources: {
    Resources: {
      TypesciptTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "TypescriptTable",
          AttributeDefinitions: [

            { AttributeName: 'id', AttributeType: 'S' }

          ],
          KeySchema: [
            { AttributeName: 'id', KeyType: 'HASH' },

          ],
          BillingMode: 'PAY_PER_REQUEST',
        },
      }
    }

  },
  // import the function via paths
  functions: { hello, AddData, GetList, SingleItem, DeleteItem, UpdateItem, simpleauth, simpleauthorization },
};

module.exports = serverlessConfiguration;
