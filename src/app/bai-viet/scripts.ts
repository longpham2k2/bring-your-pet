export async function getArticles(perpage?: number, page?: number) {
  let uri = `http://localhost:3000/api/articles`;
  uri += `?perpage=${perpage || 10}`;
  if (page) uri += `&page=${page}`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  } 
}
