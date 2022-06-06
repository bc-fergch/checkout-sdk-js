// Braintree PayPal Old Button Strategy
// TODO: This strategy should be removed right after braintree button strategies separation
// TODO: Should be removed after BraintreePaypalButtonStrategy, BraintreePaypalCreditButtonStrategy and BraintreeVenmoButtonStrategy strategies creation
export { default as BraintreePaypalV1ButtonStrategy } from './braintree-paypal-v1-button-strategy';
export { BraintreePaypalV1ButtonInitializeOptions } from './braintree-paypal-v1-button-options';

// Braintree Venmo
export { default as BraintreeVenmoButtonStrategy } from './braintree-venmo-button-strategy';
export { BraintreeVenmoButtonInitializeOptions } from './braintree-venmo-button-options';
