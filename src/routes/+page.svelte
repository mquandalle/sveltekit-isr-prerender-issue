<h1>Vercel ISR page isn't pre-rendered</h1>
<p>
  I expect an ISR page to be pre-rendered at build time, so that it loads
  instantly on the first visit.
</p>
<p>But it's not the case, the first load is slow. To reproduce the issue:</p>
<ol>
  <li>
    First redeploy the app to reset the ISR cache : <button
      on:click={() => fetch("/redeploy-app")}>Redeploy</button
    > (wait ~20s for Vercel deployment to complete)
  </li>
  <li>
    Then visit the <a href="/isr-page">ISR page</a>. It takes some time to load
    the first time.
  </li>
  <li>Subsequent visits are fast as the ISR page is cached.</li>
</ol>
<p>
  <a href="https://github.com/mquandalle/sveltekit-isr-prerender-issue"
    >Source code</a
  >
</p>
