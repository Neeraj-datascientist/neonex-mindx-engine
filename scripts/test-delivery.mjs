/**
 * Calls /api/send-enquiry and prints JSON. Run with dev server up.
 * Usage: node scripts/test-delivery.mjs [primary|fallback]
 */
const base = process.argv[2] === "fallback" ? "fallback" : "primary";
const body = JSON.stringify({
  name: `Delivery test (${base})`,
  email: "delivery-test@example.com",
  phone: "+91 9876500001",
});

const res = await fetch("http://localhost:3000/api/send-enquiry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body,
});

const text = await res.text();
console.log(`HTTP ${res.status}`);
try {
  console.log(JSON.stringify(JSON.parse(text), null, 2));
} catch {
  console.log(text.slice(0, 500));
}
