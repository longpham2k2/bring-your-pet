export default function throwException(message?: string, status?: number) {
  const errorStatus = status || 500;
  const errorMessage = message || "Internal Server Error";

  return Response.json({ message: errorMessage }, { status: errorStatus });
}
