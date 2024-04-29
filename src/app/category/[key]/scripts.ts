export async function getArticles(categoryKey: string, perpage?: number, page?: number) {
  let uri = `http://localhost:3000/api/articles`;
  uri += `?perpage=${perpage || 10}`;
  if (page) uri += `&page=${page}`;
  uri += `&category=${categoryKey}`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  } 
}

export async function getCategory(categoryKey: string) {
  let uri = `http://localhost:3000/api/categories/${categoryKey}`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  } 
}
