export function HTTPStream(httpSource: string) {
  return new ReadableStream({
    start(controller) {
      fetch(httpSource, {
        cache: "no-store",
      })
        .then(async (response: any) => {
          // response.body is a ReadableStream
          const reader = response.body.getReader();
          for await (const chunk of readChunks(reader)) {
            // console.log(`received chunk of size ${chunk.length}`);
            controller.enqueue(chunk);
          }
          controller.close();
        })
        .catch((error) => controller.error(error));
    },
  });
}

export function HTTPStreamResponse(httpSource: string) {
  const stream = HTTPStream(httpSource);

  return new Response(stream);
}

export async function DroidcamStreamResponse(httpSource: string) {
  const stream = HTTPStream(`${httpSource}/video`);
  const headers = new Headers();
  headers.set("Content-Type", "multipart/x-mixed-replace; boundary=--dcmjpeg");
  headers.set("Cache-Control", "no-store, must-revalidate");

  return new Response(stream, { headers });
}

function readChunks(reader: any) {
  return {
    async *[Symbol.asyncIterator]() {
      let readResult = await reader.read();
      while (!readResult.done) {
        yield readResult.value;
        readResult = await reader.read();
      }
    },
  };
}

function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}
