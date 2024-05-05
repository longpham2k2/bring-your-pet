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

export async function createCustomer(newCustomer: {
  fullname?: string;
  avatar?: string;
  phone: string;
}) {
  let uri = `http://localhost:3000/api/customers`;
  let formData = new FormData();
  formData.set("username", newCustomer.phone);
  formData.set("password", '123');
  if (newCustomer.avatar) {
    formData.set("avatar", newCustomer.avatar);
  }
  if (newCustomer.fullname) {
    formData.set("fullname", newCustomer.fullname);
  }
  if (newCustomer.phone) {
    formData.set("phone", newCustomer.phone);
  }
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

export async function deleteCustomer(customerId: string) {
  let uri = `http://localhost:3000/api/customers/${customerId}`;
  try {
    const response = await fetch(uri, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (err: any) {
    throw err;
  }
}

export async function updateCustomer(
  customerId: string,
  newCustomer: {
    username?: string;
    password?: string;
    avatar?: string;
    fullname?: string;
    phone?: string;
  }
) {
  let uri = `http://localhost:3000/api/customers/${customerId}`;
  let formData = new FormData();
  if (newCustomer.phone) {
    formData.set("username", newCustomer.phone);
  }
  if (newCustomer.password) {
    formData.set("password", newCustomer.password);
  }
  if (newCustomer.avatar) {
    formData.set("avatar", newCustomer.avatar);
  }
  if (newCustomer.fullname) {
    formData.set("fullname", newCustomer.fullname);
  }
  if (newCustomer.phone) {
    formData.set("phone", newCustomer.phone);
  }
  try {
    const response = await fetch(uri, {
      method: "PATCH",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (err: any) {
    throw err;
  }
}

