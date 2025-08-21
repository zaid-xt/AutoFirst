import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // React frontend
  methods: ["GET", "POST"],
}));

// ✅ PayFast Live Merchant Details
const PAYFAST_MERCHANT_ID = "25197615"; // Live Merchant ID
const PAYFAST_MERCHANT_KEY = "k4lgklgzt329m"; // Live Merchant Key
const PAYFAST_RETURN_URL = "http://localhost:5173/confirmation";
const PAYFAST_CANCEL_URL = "http://localhost:5173/cart";
const PAYFAST_NOTIFY_URL = "http://localhost:5000/api/payfast/notify";

// Helper: Generate PayFast query string
const generatePayFastForm = (data) => {
  const params = new URLSearchParams();
  for (const key in data) {
    if (data[key] !== undefined) {
      params.append(key, data[key]);
    }
  }
  return params.toString();
};

// ✅ Create Recurring Subscription
app.post("/api/payfast/create-subscription", (req, res) => {
  const { items, customer } = req.body;

  // Calculate total amount (monthly subscription)
  const totalAmount = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("R", ""));
    return acc + price * item.quantity;
  }, 0).toFixed(2);

  // ⚡ Recurring subscription data
  const subscriptionData = {
    merchant_id: PAYFAST_MERCHANT_ID,
    merchant_key: PAYFAST_MERCHANT_KEY,
    return_url: PAYFAST_RETURN_URL,
    cancel_url: PAYFAST_CANCEL_URL,
    notify_url: PAYFAST_NOTIFY_URL,
    // Subscription-specific fields
    subscription_type: 1, // 1 = recurring billing
    billing_date: new Date().toISOString().split("T")[0], // start today
    recurring_amount: totalAmount, // amount per billing cycle
    cycles: 0, // 0 = infinite cycles
    frequency: 3, // 3 = monthly (options: 3=monthly, 4=quarterly, 5=biannual, 6=annual)
    amount: totalAmount,
    item_name: items.map((i) => i.name).join(", "),
    name_first: customer.firstName,
    name_last: customer.lastName,
    email_address: customer.email,
  };

  const queryString = generatePayFastForm(subscriptionData);
  const payFastURL = `https://www.payfast.co.za/eng/process?${queryString}`;

  res.json({ url: payFastURL });
});

// ✅ PayFast IPN Listener (Optional but recommended)
app.post("/api/payfast/notify", (req, res) => {
  console.log("PayFast IPN Received:", req.body);
  // TODO: validate signature & store recurring payment info
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
