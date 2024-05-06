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

export async function createPet(newPet: {
  name: string;
  ownerId: string;
  serviceId: string;
  roomId?: string;
  checkInAt: string;
  checkOutAt?: string;
}) {
  let uri = `http://localhost:3000/api/pets`;
  let formData = new FormData();
  formData.set("name", newPet.name);
  formData.set("ownerId", newPet.ownerId);
  formData.set("serviceId", newPet.serviceId);
  if (newPet.roomId) {
    formData.set("roomId", newPet.roomId);
  }
  formData.set("checkInAt", newPet.checkInAt);
  if (newPet.checkOutAt) {
    formData.set("checkOutAt", newPet.checkOutAt);
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

export async function deletePet(petId: string) {
  let uri = `http://localhost:3000/api/pets/${petId}`;
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

export async function updatePet(
  petId: string,
  newPet: {
    name?: string;
    ownerId?: string;
    serviceId?: string;
    roomId?: string;
    checkInAt?: string;
    checkOutAt?: string;
  }
) {
  let uri = `http://localhost:3000/api/pets/${petId}`;
  let formData = new FormData();
  if (newPet.name) {
    formData.set("name", newPet.name);
  }
  if (newPet.ownerId) {
    formData.set("ownerId", newPet.ownerId);
  }
  if (newPet.serviceId) {
    formData.set("serviceId", newPet.serviceId);
  }
  if (newPet.roomId) {
    formData.set("roomId", newPet.roomId);
  }
  if (newPet.checkInAt) {
    formData.set("checkInAt", newPet.checkInAt);
  }
  if (newPet.checkOutAt) {
    formData.set("checkOutAt", newPet.checkOutAt);
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

