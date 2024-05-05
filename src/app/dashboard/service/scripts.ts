export async function getServices() {
  let uri = `http://localhost:3000/api/services`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  }
}

export async function createService(newService: { name: string }) {
  let uri = `http://localhost:3000/api/services`;
  let formData = new FormData();
  formData.set("name", newService.name);
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

export async function deleteService(serviceId: string) {
  let uri = `http://localhost:3000/api/services/${serviceId}`;
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

export async function updateService(
  serviceId: string,
  newRoom: {
    name: string;
  }
) {
  let uri = `http://localhost:3000/api/services/${serviceId}`;
  let formData = new FormData();
  formData.set("name", newRoom.name);
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
