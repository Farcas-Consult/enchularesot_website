"use client";

import Link from "next/link";

const individualRates = [
  ["Daily (Per Session)", "Ksh 1,000"],
  ["All Classes (Per Session)", "Ksh 500"],
  ["Weekly (7 Days)", "Ksh 4,000"],
  ["Monthly (30 Days)", "Ksh 8,500"],
  ["Monthly Plus Locker", "Ksh 10,000"],
  ["Quarterly (90 Days)", "Ksh 24,000"],
  ["Quarterly Plus Locker", "Ksh 28,000"],
  ["Semi-Annually (180 Days)", "Ksh 45,000"],
  ["Annually (1 Year)", "Ksh 85,000"],
];

const corporateRates = [
  ["Quarterly (90 Days)", "Ksh 21,000", "Ksh 210,000"],
  ["Semi-Annually (180 Days)", "Ksh 40,000", "Ksh 400,000"],
  ["Annually (1 Year)", "Ksh 75,000", "Ksh 750,000"],
];

const couplesRates = [
  ["Monthly (30 Days)", "Ksh 16,000"],
  ["Quarterly (90 Days)", "Ksh 45,000"],
  ["Semi-Annually (180 Days)", "Ksh 80,000"],
  ["Annually (1 Year)", "Ksh 150,000"],
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --brown:      var(--brand-warm-brown);
    --brown-dark: var(--brand-black);
    --brown-deep: var(--brand-gray);
    --gold:       var(--brand-primary);
    --sand:       var(--brand-light-brown);
    --blush:      var(--brand-blush);
    --peach:      var(--brand-peach);
    --cream:      var(--brand-background);
    --white:      var(--brand-white);
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans:  'Jost', system-ui, sans-serif;
    --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  }

  .gs-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .gs-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
  }

  .gs-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: .85rem 1.35rem;
    border: 1px solid color-mix(in srgb, var(--brand-peach) 55%, transparent);
    color: var(--brown-dark);
    background: var(--peach);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-decoration: none;
    text-transform: uppercase;
    transition: transform .25s var(--ease-out), background .25s var(--ease-out), color .25s var(--ease-out);
  }

  .gs-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
  }

  .gs-btn-secondary {
    color: var(--peach);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(8px);
  }

  .gs-btn-secondary:hover {
    color: var(--brown-dark);
    background: var(--peach);
  }

  .gs-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .gs-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
  }

  .gs-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .gs-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .gs-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .gs-copy {
    color: rgba(74,36,0,.72);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .gs-overview {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    background: var(--white);
  }

  .gs-overview-media {
    position: relative;
    min-height: 560px;
    overflow: hidden;
    background: var(--sand);
  }

  .gs-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .gs-overview-media:hover .gs-img {
    transform: scale(1.035);
  }

  .gs-overview-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 5vw, 4rem);
  }

  .gs-overview-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.35rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
  }

  .gs-stat-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    background: var(--sand);
    margin-top: 2rem;
  }

  .gs-stat {
    background: var(--cream);
    padding: 1.25rem;
  }

  .gs-stat strong {
    display: block;
    color: var(--brown);
    font-family: var(--font-serif);
    font-size: 2.25rem;
    font-weight: 300;
    line-height: 1;
    margin-bottom: .45rem;
  }

  .gs-stat span {
    color: rgba(74,36,0,.66);
    font-size: .68rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .gs-plan-list {
    display: grid;
    gap: 2rem;
  }

  .gs-plan {
    display: grid;
    grid-template-columns: 320px minmax(0, 1fr);
    background: var(--white);
  }

  .gs-plan-side {
    background: var(--brown-dark);
    color: var(--peach);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
  }

  .gs-plan-title {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: 2.6rem;
    font-weight: 300;
    line-height: 1;
    margin: 1.5rem 0 .75rem;
  }

  .gs-plan-note {
    color: color-mix(in srgb, var(--brand-peach) 72%, transparent);
    line-height: 1.65;
    margin: 0;
  }

  .gs-table-wrap {
    overflow-x: auto;
    padding: 1.25rem;
  }

  .gs-table {
    border-collapse: collapse;
    min-width: 560px;
    width: 100%;
  }

  .gs-table th {
    background: var(--peach);
    color: var(--brown-dark);
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .13em;
    padding: 1rem;
    text-align: left;
    text-transform: uppercase;
  }

  .gs-table th:last-child,
  .gs-table td:last-child,
  .gs-table td.gs-align-right,
  .gs-table th.gs-align-right {
    text-align: right;
  }

  .gs-table td {
    border-bottom: 1px solid rgba(143,95,47,.15);
    color: var(--brown-dark);
    font-size: .95rem;
    padding: 1rem;
  }

  .gs-table tr:last-child td {
    border-bottom: 0;
  }

  .gs-price {
    color: var(--brown);
    font-weight: 700;
    white-space: nowrap;
  }

  .gs-cta {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: 2rem;
    padding: 4rem clamp(1.5rem, 4vw, 4rem);
    text-align: center;
  }

  .gs-cta h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 auto 1rem;
    max-width: 760px;
  }

  .gs-cta p {
    color: color-mix(in srgb, var(--brand-peach) 78%, transparent);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
  }

  @media (max-width: 980px) {
    .gs-section {
      width: min(100% - 2rem, 720px);
    }

    .gs-section {
      padding: 4rem 0;
    }

    .gs-section-heading,
    .gs-overview,
    .gs-plan {
      grid-template-columns: 1fr;
    }

    .gs-overview-media {
      min-height: 420px;
    }

    .gs-plan-side {
      gap: 1.5rem;
    }
  }

  @media (max-width: 560px) {
    .gs-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .gs-btn {
      width: 100%;
    }

    .gs-stat-grid {
      grid-template-columns: 1fr;
    }

    .gs-overview-content,
    .gs-plan-side,
    .gs-table-wrap {
      padding: 1.5rem;
    }
  }
`;

function RateTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="gs-table-wrap">
      <table className="gs-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className={index > 0 ? "gs-align-right" : ""} key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => (
                <td className={index > 0 ? "gs-price gs-align-right" : ""} key={cell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GymSubscriptionsPage() {
  return (
    <section id="gym-subscriptions" className="gs-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div id="membership-rates" className="gs-section">
        <div className="gs-section-heading">
          <div>
            <div className="gs-kicker">Membership packages 2026</div>
            <h2 className="gs-heading">
              Compare the rates <em>side by side</em>
            </h2>
          </div>
          <p className="gs-copy">
            All rates are shown in Kenyan shillings. Corporate and group rates are based on a
            minimum of 10 members.
          </p>
        </div>

        <div className="gs-plan-list">
          <article className="gs-plan">
            <div className="gs-plan-side">
              <div>
                <div className="gs-kicker">Individual</div>
                <h3 className="gs-plan-title">Individual Membership</h3>
                <p className="gs-plan-note">
                  Best for guests and members choosing their own training rhythm.
                </p>
              </div>
            </div>
            <RateTable columns={["Type", "Amount"]} rows={individualRates} />
          </article>

          <article className="gs-plan">
            <div className="gs-plan-side">
              <div>
                <div className="gs-kicker">Corporate and groups</div>
                <h3 className="gs-plan-title">Corporate Membership</h3>
                <p className="gs-plan-note">
                  For organizations and teams with a minimum of 10 members.
                </p>
              </div>
            </div>
            <RateTable
              columns={["Minimum 10 Pax", "Rate Per Person", "Amount"]}
              rows={corporateRates}
            />
          </article>

          <article className="gs-plan">
            <div className="gs-plan-side">
              <div>
                <div className="gs-kicker">Couples</div>
                <h3 className="gs-plan-title">Couples Membership</h3>
                <p className="gs-plan-note">
                  Shared access for two members training consistently together.
                </p>
              </div>
            </div>
            <RateTable columns={["Type", "Amount"]} rows={couplesRates} />
          </article>
        </div>

        <div className="gs-cta">
          <h2>Ready to start your membership?</h2>
          <p>
            Contact reception to confirm the right package, ask about access, or arrange a
            corporate/group membership for your team.
          </p>
          <div className="gs-actions" style={{ justifyContent: "center" }}>
            <a className="gs-btn" href="tel:+254727000027">
              Call 0727 000027
            </a>
            <Link className="gs-btn gs-btn-secondary" href="/wellness-fitness">
              Back to Wellness
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
