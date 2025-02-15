import { ApiGatewayContract } from '../apiGatewayContract';
import {
  ApiGatewayLambdaCompleteTriggerType,
  ApiGatewayTriggerArgs,
  ApiGatewayTriggerKey,
} from '../types';

/**
 * Returns a basic serverless function trigger associated to an ApiGatewayContract
 *
 * @argument contract your ApiGatewayContract
 * @argument additionalConfig for example an authorizer reference. Only required when the contract requires authentication
 */
export const getTrigger = <Contract extends ApiGatewayContract>(
  ...[contract, additionalConfig]: ApiGatewayTriggerArgs<Contract>
): ApiGatewayLambdaCompleteTriggerType<
  ApiGatewayTriggerKey<Contract['integrationType']>,
  Contract['authorizerType']
> => {
  const key = contract.integrationType === 'httpApi' ? 'httpApi' : 'http';

  // @ts-ignore somehow the type inference does not work here
  return {
    [key]: {
      ...additionalConfig,
      path: contract.path,
      method: contract.method,
    },
  };
};
