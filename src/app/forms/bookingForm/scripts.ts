export async function signIn(username: string, password: string) {
  let uri = `http://localhost:3000/api/auth`;
  let formData = new FormData();
  formData.set("username", username);
  formData.set("password", password);
  try {
    const response = await fetch(uri, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (err: any) {
    throw err;
  }
}
