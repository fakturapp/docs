export const metadata = { title: 'Changelog · Faktur Developers' }

const entries = [
  {
    version: 'v2.0.0-beta.3',
    date: '2026-06-08',
    sections: [
      {
        title: 'Ajouté',
        items: [
          'Quotas de crédits par forfait : budgets par session de 5 heures et par semaine glissante propres aux formules Gratuit, Pro et Team',
          'Coût des requêtes pondéré en crédits : 1 en lecture, 3 en suppression, 5 en écriture, 25 pour les opérations lourdes (PDF, exports, IA)',
          'Limite par minute selon le forfait : 3 en Gratuit, 60 en Pro, 120 en Team',
          "Limites de clés d'API par forfait : 1 en Gratuit, 2 en Pro, 5 en Team",
          'Limites de projets par forfait : 1 en Gratuit, 3 en Pro, 20 en Team',
          "Forfait de l'équipe exposé sur les endpoints ping et usage",
          'Champs suspended et apiGraceEndsAt exposés sur les clés et les projets',
          'En-têtes X-Credits-* et X-RateLimit-* accessibles aux navigateurs via CORS',
        ],
      },
      {
        title: 'Modifié',
        items: [
          "L'API Explorer requiert désormais une formule Pro ou Team",
          'En cas de rétrogradation, les clés et projets excédentaires passent en période de grâce de 7 jours puis sont suspendus, et sont restaurés à la mise à niveau',
        ],
      },
    ],
  },
  {
    version: 'v2.0.0-beta.2',
    date: '2026-05-18',
    sections: [
      {
        title: 'Modifié',
        items: [
          'Le chemin de base /api/v2/ devient /api/platform/ dans toute la documentation et les exemples',
          'Nouveau modèle de limitation par crédits : 3 requêtes par minute, 100 crédits par session de 5 heures, 1000 crédits par semaine glissante',
          'Les réponses 429 précisent la raison du refus et les en-têtes X-Credits-* détaillent le budget restant',
        ],
      },
    ],
  },
  {
    version: 'v2.0.0-beta.1',
    date: '2026-05-17',
    sections: [
      {
        title: 'Added',
        items: [
          'Initial beta release of the Faktur public API V2',
          'Personal API keys with resource:action scopes, rotation, and IP allowlist',
          'Read endpoints for invoices, quotes, clients, products, bank_accounts, company, team',
          'Write endpoints for clients (full CRUD), products (full CRUD), and invoices/mark-paid',
          'Webhook subscriptions with HMAC-SHA256 signatures and 8-step retry policy',
          '30 webhook event types across 10 categories',
          'Cursor-based pagination on all collections',
          'Per-minute and per-hour sliding-window rate limits with X-RateLimit-* headers',
          'Idempotency-key support on mutations (24h TTL)',
          'Dashboard UI for managing keys, webhooks, deliveries, logs, and usage stats',
          'Developer portal at developers.fakturapp.cc with reference, concepts, and quickstart',
        ],
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">Changelog</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">API V2 changelog</h1>
      <p className="mt-4 text-(--muted-foreground)">
        Breaking changes will bump the URL path version (<code>/api/v3/</code>). Additions are
        always backward-compatible within a major version.
      </p>

      <div className="mt-10 space-y-12">
        {entries.map((entry) => (
          <article key={entry.version} className="relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-1.5 size-3 rounded-full bg-violet-500" />
            <div className="absolute bottom-0 left-1.5 top-5 w-px bg-(--border)" />
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-semibold">{entry.version}</h2>
              <time className="text-xs text-(--muted-foreground)">{entry.date}</time>
            </div>
            {entry.sections.map((s) => (
              <div key={s.title} className="mt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted-foreground)">
                  {s.title}
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-(--foreground)">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-(--muted-foreground)" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </div>
  )
}
