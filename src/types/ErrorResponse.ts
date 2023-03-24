export default interface errorResponseType {
  response: { status: number; statusText: string; data: { message: string } };
}
