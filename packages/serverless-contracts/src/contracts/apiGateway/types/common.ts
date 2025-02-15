import { FromSchema, JSONSchema } from 'json-schema-to-ts';

import { ConstrainedJSONSchema } from 'types/constrainedJSONSchema';

import { ApiGatewayContract } from '../apiGatewayContract';

export type PathParametersType<Contract extends ApiGatewayContract> =
  Contract['pathParametersSchema'] extends ConstrainedJSONSchema
    ? FromSchema<Contract['pathParametersSchema']>
    : undefined;

export type QueryStringParametersType<Contract extends ApiGatewayContract> =
  Contract['queryStringParametersSchema'] extends ConstrainedJSONSchema
    ? FromSchema<Contract['queryStringParametersSchema']>
    : undefined;

export type HeadersType<Contract extends ApiGatewayContract> =
  Contract['headersSchema'] extends ConstrainedJSONSchema
    ? FromSchema<Contract['headersSchema']>
    : undefined;

export type BodyType<Contract extends ApiGatewayContract> =
  Contract['bodySchema'] extends JSONSchema
    ? FromSchema<Contract['bodySchema']>
    : undefined;

export type OutputType<Contract extends ApiGatewayContract> =
  Contract['outputSchema'] extends JSONSchema
    ? FromSchema<Contract['outputSchema']>
    : void;
