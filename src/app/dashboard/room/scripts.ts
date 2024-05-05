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

export async function createRoom(newRoom: {
  name: string;
  type: string;
  cameraId: string;
}) {
  let uri = `http://localhost:3000/api/room`;
  let formData = new FormData();
  formData.set("name", newRoom.name);
  formData.set("type", newRoom.type);
  formData.set("cameraId", newRoom.cameraId);
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

export async function deleteRoom(roomId: string) {
  let uri = `http://localhost:3000/api/room/${roomId}`;
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

export async function updateRoom(
  roomId: string,
  newRoom: {
    name: string;
    type: string;
    cameraId: string;
    isOccupied?: boolean;
  }
) {
  let uri = `http://localhost:3000/api/room/${roomId}`;
  let formData = new FormData();
  formData.set("name", newRoom.name);
  formData.set("type", newRoom.type);
  formData.set("cameraId", newRoom.cameraId);
  if (newRoom.isOccupied) {
    formData.set("isOccupied", JSON.stringify(newRoom.isOccupied));
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
