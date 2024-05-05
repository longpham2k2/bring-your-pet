import ICamera from "./interfaces/ICamera";

export async function getCameras() {
  let uri = `http://localhost:3000/api/camera`;
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
  } catch (err: any) {
    throw err;
  }
}

export async function createCamera(newCamera: {
  name: string;
  type: string;
  address: string;
}) {
  let uri = `http://localhost:3000/api/camera`;
  let formData = new FormData();
  formData.set("name", newCamera.name);
  formData.set("type", newCamera.type);
  formData.set("address", newCamera.address);
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

export async function deleteCamera(cameraId: string) {
  let uri = `http://localhost:3000/api/camera/${cameraId}`;
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

export async function updateCamera(cameraId: string, newCamera: {
  name: string;
  type: string;
  address: string;
}) {
  let uri = `http://localhost:3000/api/camera/${cameraId}`;
  let formData = new FormData();
  formData.set("name", newCamera.name);
  formData.set("type", newCamera.type);
  formData.set("address", newCamera.address);
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
