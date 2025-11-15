// Simple auth service used for local development / mock API.
// Replace with real API calls (fetch/axios) later.

function fakeDelay(ms = 600) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function signIn(email, password) {
  await fakeDelay();
  if (!email || !password) throw new Error("Missing credentials");
  // naive validation for demo
  if (password.length < 4) throw new Error("Password too short");
  // return a fake token
  return { token: btoa(email + ":" + Date.now()) };
}

export async function signUp({ name, email, password }) {
  await fakeDelay();
  if (!name || !email || !password) throw new Error("Missing fields");
  if (password.length < 4) throw new Error("Password too short");
  return { token: btoa(email + ":" + Date.now()) };
}
