export async function getRooms() {
  let uri = `http://localhost:3000/api/room`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  }
}
