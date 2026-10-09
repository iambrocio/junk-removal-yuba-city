// Receives quote requests from the contact form.
// TODO: forward leads to an inbox or webhook once one is assigned.
// Until then they're only written to the server logs (Vercel → Logs).
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.phone) {
    return Response.json({ ok: false }, { status: 400 });
  }
  console.log("[quote]", JSON.stringify(body));
  return Response.json({ ok: true });
}
