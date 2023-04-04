export async function onRequest( context ) {
  console.log('test.onRequest');
  console.log(context.env);
  return new Response('hello function');
}
