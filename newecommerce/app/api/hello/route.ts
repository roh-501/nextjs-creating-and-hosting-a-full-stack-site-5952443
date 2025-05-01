export async function GET() {
  return new Response('Hello from next js route handler!',{
    status:200
  });
}

export async function POST() {
  return new Response('Thank you for listening to this handler',{
    status:200
  });
}