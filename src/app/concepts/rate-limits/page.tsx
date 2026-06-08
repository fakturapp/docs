export const metadata = { title: 'Rate limits & quotas · Faktur Developers' }

export default function RateLimitsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">Concept</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Rate limits & quotas</h1>
      <p className="mt-4 text-(--muted-foreground)">
        Faktur meters the API with <strong>credits</strong>, like AI tokens. Each call debits a
        number of credits that depends on what it does: a read costs far less than a write.
        Credits are evaluated per team against two rolling budgets (5&nbsp;h and weekly), plus a
        per-minute request cap to absorb bursts. The most restrictive limit wins, and every limit
        scales with the team plan.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Credit cost per call</h2>
        <p className="mt-3 text-sm text-(--muted-foreground)">
          The cost is derived from the HTTP method, with heavy operations (PDF, exports, AI, bulk)
          billed more.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-(--border) bg-(--muted)/40 p-4">
            <p className="text-xs uppercase tracking-wider text-(--muted-foreground)">Read</p>
            <p className="mt-1 text-2xl font-semibold">1</p>
            <p className="mt-1 text-xs text-(--muted-foreground)">GET, HEAD</p>
          </div>
          <div className="rounded-xl border border-(--border) bg-(--muted)/40 p-4">
            <p className="text-xs uppercase tracking-wider text-(--muted-foreground)">Delete</p>
            <p className="mt-1 text-2xl font-semibold">3</p>
            <p className="mt-1 text-xs text-(--muted-foreground)">DELETE</p>
          </div>
          <div className="rounded-xl border border-(--border) bg-(--muted)/40 p-4">
            <p className="text-xs uppercase tracking-wider text-(--muted-foreground)">Write</p>
            <p className="mt-1 text-2xl font-semibold">5</p>
            <p className="mt-1 text-xs text-(--muted-foreground)">POST, PUT, PATCH</p>
          </div>
          <div className="rounded-xl border border-(--border) bg-(--muted)/40 p-4">
            <p className="text-xs uppercase tracking-wider text-(--muted-foreground)">Heavy</p>
            <p className="mt-1 text-2xl font-semibold">25</p>
            <p className="mt-1 text-xs text-(--muted-foreground)">PDF, export, AI, bulk</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-(--muted-foreground)">
          The exact cost of a call is returned in the <code>X-Credits-Cost</code> response header.
          The per-minute cap counts <strong>requests</strong>, not credits.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Budgets per plan</h2>
        <p className="mt-3 text-sm text-(--muted-foreground)">
          Both rolling windows start at the first authenticated request and reset once their
          duration has elapsed. Upgrading a team raises every limit immediately.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-(--border)">
          <table className="w-full text-sm">
            <thead className="bg-(--muted)/40 text-(--muted-foreground)">
              <tr>
                <th className="px-4 py-2.5 text-left font-medium">Plan</th>
                <th className="px-4 py-2.5 text-right font-medium">Per minute</th>
                <th className="px-4 py-2.5 text-right font-medium">5&nbsp;h (credits)</th>
                <th className="px-4 py-2.5 text-right font-medium">Weekly (credits)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--border)">
              <tr>
                <td className="px-4 py-2.5 font-medium">Free</td>
                <td className="px-4 py-2.5 text-right tabular-nums">3</td>
                <td className="px-4 py-2.5 text-right tabular-nums">100</td>
                <td className="px-4 py-2.5 text-right tabular-nums">1 000</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Pro</td>
                <td className="px-4 py-2.5 text-right tabular-nums">60</td>
                <td className="px-4 py-2.5 text-right tabular-nums">2 000</td>
                <td className="px-4 py-2.5 text-right tabular-nums">25 000</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Team</td>
                <td className="px-4 py-2.5 text-right tabular-nums">120</td>
                <td className="px-4 py-2.5 text-right tabular-nums">30 000</td>
                <td className="px-4 py-2.5 text-right tabular-nums">500 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Plan resource limits</h2>
        <p className="mt-3 text-sm text-(--muted-foreground)">
          Beyond throughput, the number of API keys and projects a team can keep also depends on
          the plan. The API Explorer requires a paid plan.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-(--border)">
          <table className="w-full text-sm">
            <thead className="bg-(--muted)/40 text-(--muted-foreground)">
              <tr>
                <th className="px-4 py-2.5 text-left font-medium">Plan</th>
                <th className="px-4 py-2.5 text-right font-medium">API keys</th>
                <th className="px-4 py-2.5 text-right font-medium">Projects</th>
                <th className="px-4 py-2.5 text-right font-medium">API Explorer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--border)">
              <tr>
                <td className="px-4 py-2.5 font-medium">Free</td>
                <td className="px-4 py-2.5 text-right tabular-nums">1</td>
                <td className="px-4 py-2.5 text-right tabular-nums">1</td>
                <td className="px-4 py-2.5 text-right">No</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Pro</td>
                <td className="px-4 py-2.5 text-right tabular-nums">2</td>
                <td className="px-4 py-2.5 text-right tabular-nums">3</td>
                <td className="px-4 py-2.5 text-right">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Team</td>
                <td className="px-4 py-2.5 text-right tabular-nums">5</td>
                <td className="px-4 py-2.5 text-right tabular-nums">20</td>
                <td className="px-4 py-2.5 text-right">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-(--muted-foreground)">
          When a team is downgraded below its current usage, the extra keys and projects are not
          deleted. After a 7-day grace period they are <strong>suspended</strong>: suspended keys
          stop authenticating (<code>key_suspended</code>) and suspended projects become read-only
          in the dashboard. Re-subscribing reactivates them automatically.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What does not count</h2>
        <p className="mt-3 text-sm">
          Meta endpoints under <code>/api/platform/*</code> are free and never decrement a
          counter:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-(--muted-foreground)">
          <li>
            <code>GET /api/platform/ping</code>: identity probe
          </li>
          <li>
            <code>GET /api/platform/session</code>: current session, weekly and per-minute
            counters
          </li>
          <li>
            <code>GET /api/platform/usage</code>: full usage payload including team and key
            metadata
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Headers on every response</h2>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-(--border) bg-(--code-bg) p-4 text-xs">
          <code>{`X-Credits-Cost: 5
X-Credits-Session-Limit: 2000
X-Credits-Session-Window-Hours: 5
X-Credits-Session-Remaining: 1870
X-Credits-Weekly-Limit: 25000
X-Credits-Weekly-Remaining: 24120
X-Credits-Per-Minute-Limit: 60
X-Credits-Minute-Remaining: 58`}</code>
        </pre>
        <p className="mt-3 text-xs text-(--muted-foreground)">
          The example above is a Pro team. The limit headers reflect the team plan in effect.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">429 response</h2>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-(--border) bg-(--code-bg) p-4 text-xs">
          <code>{`HTTP/1.1 429 Too Many Requests
Retry-After: 18

{
  "error": {
    "code": "rate_limited",
    "message": "Rate limit exceeded",
    "details": {
      "reason": "quota_session",
      "retry_after_seconds": 18,
      "cost": 25,
      "limits": {
        "per_minute": 60,
        "per_session": 2000,
        "session_hours": 5,
        "per_week": 25000
      }
    }
  }
}`}</code>
        </pre>
        <p className="mt-3 text-sm text-(--muted-foreground)">
          The <code>reason</code> tells you which window blocked the call:{' '}
          <code>rate_limit_minute</code>, <code>quota_session</code>, or{' '}
          <code>quota_weekly</code>. <code>cost</code> is the number of credits the blocked call
          would have debited.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Recommended client behaviour</h2>
        <ul className="mt-3 space-y-2 text-sm text-(--muted-foreground)">
          <li>
            Hit <code>GET /api/platform/usage</code> once at startup to know your remaining credit
            budget. It is free and gives the exact reset timestamps.
          </li>
          <li>
            Read <code>X-Credits-Session-Remaining</code> and slow down preemptively before
            hitting zero, accounting for the <code>X-Credits-Cost</code> of your next call.
          </li>
          <li>
            Prefer reads over repeated writes, and batch where possible, since a write costs five
            times a read.
          </li>
          <li>
            On <code>429</code>, honour <code>Retry-After</code> exactly, then add a small jitter
            (±10%).
          </li>
        </ul>
      </section>
    </div>
  )
}
