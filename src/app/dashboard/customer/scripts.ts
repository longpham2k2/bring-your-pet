export async function getCustomers() {
  let uri = `http://localhost:3000/api/customers`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  }
}
