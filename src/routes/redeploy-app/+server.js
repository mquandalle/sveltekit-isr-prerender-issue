import { REDEPLOY_HOOK_URL } from "$env/static/private";

export async function GET() {
  return await fetch(REDEPLOY_HOOK_URL);
}
