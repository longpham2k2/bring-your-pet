export async function getPets() {
  let uri = `http://localhost:3000/api/pets`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  }
}
