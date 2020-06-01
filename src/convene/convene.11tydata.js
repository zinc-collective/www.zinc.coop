const data = {
  stripeKey: process.env.STRIPE_PUBLISHABLE_API_KEY || "Missing STRIPE_PUBLISHABLE_API_KEY",
  priceId: process.env.CONVENE_PRICE_ID || "Missing CONVENE_PRICE_ID"
}
module.exports = data