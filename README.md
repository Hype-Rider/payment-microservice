HOW TO USE

Pre-req
- Must have created "prices" object ahead of time


Charge someone a subscription
1. Create a customer using POST /customers
2. Get list of prices using GET /prices
3. Collect payment method info for customer and POST /payment_methods
4. Attach payment mathod to customer using POST /payment_methods/:id/attach
5. Create subscription with customer using POST /subscriptions