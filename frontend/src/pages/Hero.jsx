import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }

        .hero-title { animation: fadeUp 0.9s ease both; }
        .hero-sub { animation: fadeUp 0.9s 0.15s ease both; }
        .hero-btns { animation: fadeUp 0.9s 0.3s ease both; }
        .dashboard-float { animation: floatCard 5s ease-in-out infinite; }

        nav a { color: #334155; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; transition: color 0.2s; }
        nav a:hover { color: #0f172a; }

        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(15,23,42,0.12) !important; }

        .step-hover { transition: border-color 0.3s ease, background 0.3s ease; }
        .step-hover:hover { border-color: #6366f1 !important; background: #faf9ff !important; }

        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,0.4) !important; }
        .btn-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .btn-secondary:hover { background: rgba(255,255,255,0.18) !important; }
        .btn-secondary { transition: background 0.2s ease; }
        .login-btn:hover { background: #4338ca !important; }
        .login-btn { transition: background 0.2s ease; }

        footer a { color: #94a3b8; font-family: 'Outfit', sans-serif; font-size: 13px; text-decoration: none; transition: color 0.2s; }
        footer a:hover { color: #e2e8f0; }
      `}</style>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>PaymentTracker</h2>
        <div style={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          
          <button className="login-btn" style={styles.loginBtn} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroNoise} />
        <div style={styles.heroOrb1} />
        <div style={styles.heroOrb2} />
        <h1 className="hero-title" style={styles.title}>
          Track Money Between<br />
          <span style={styles.titleAccent}>Friends</span>
        </h1>
        <p className="hero-sub" style={styles.subtitle}>
          Never forget who owes you money again. Manage payments,
          debts and reminders with one simple dashboard.
        </p>
        <div className="hero-btns" style={styles.heroButtons}>
          <button className="btn-primary" style={styles.primaryBtn} onClick={() => navigate("/register")}>
            Create Free Account
          </button>
          <button className="btn-secondary" style={styles.secondaryBtn} onClick={() => navigate("/login")}>
            Get Started →
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={styles.section}>
        <div style={styles.labelTag}>FEATURES</div>
        <h2 style={styles.sectionTitle}>Everything you need</h2>
        <div style={styles.grid}>
          {[
            { icon: "◈", title: "Track Payments", desc: "Record money you give or receive from friends, family, or clients." },
            { icon: "◉", title: "Due Date Reminders", desc: "Set due dates and get reminders for pending payments." },
            { icon: "◐", title: "Secure Accounts", desc: "Your data is private with secure login and protected records." },
            { icon: "◑", title: "Clean Dashboard", desc: "View all financial activity in a simple and easy dashboard." },
          ].map((f, i) => (
            <div key={i} className="card-hover" style={styles.card}>
              <div style={styles.cardIcon}>{f.icon}</div>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={styles.sectionAlt}>
        <div style={styles.labelTag}>PROCESS</div>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          {[
            { num: "01", title: "Add Contact", desc: "Add a friend, client, or family member." },
            { num: "02", title: "Log Payment", desc: "Record who paid and how much." },
            { num: "03", title: "Set Due Date", desc: "Track deadlines for repayments." },
            { num: "04", title: "Settle Up", desc: "Mark payment as completed." },
          ].map((s, i) => (
            <div key={i} className="step-hover" style={styles.stepCard}>
              <div style={styles.stepNum}>{s.num}</div>
              <h3 style={styles.stepTitle}>{s.title}</h3>
              <p style={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD */}
      <section style={styles.section}>
        <div style={styles.labelTag}>PREVIEW</div>
        <h2 style={styles.sectionTitle}>Simple Dashboard</h2>
        <div className="dashboard-float" style={styles.dashboard}>
          <div style={styles.dashHeader}>
            <span style={styles.dashDot} />
            <span style={{ ...styles.dashDot, background: "#fbbf24" }} />
            <span style={{ ...styles.dashDot, background: "#34d399" }} />
            <span style={styles.dashLabel}>Payment Overview</span>
          </div>
          <div style={styles.transaction}>
            <div style={styles.txLeft}>
              <div style={styles.txAvatar}>A</div>
              <span style={styles.txName}>Alex</span>
            </div>
            <span style={styles.positive}>+$200</span>
          </div>
          <div style={styles.transaction}>
            <div style={styles.txLeft}>
              <div style={{ ...styles.txAvatar, background: "rgba(248,113,113,0.15)", color: "#f87171" }}>S</div>
              <span style={styles.txName}>Sam</span>
            </div>
            <span style={styles.negative}>-$50</span>
          </div>
          <div style={styles.transaction}>
            <div style={styles.txLeft}>
              <div style={styles.txAvatar}>J</div>
              <span style={styles.txName}>Jordan</span>
            </div>
            <span style={styles.positive}>+$120</span>
          </div>
          <div style={styles.dashDivider} />
          <div style={styles.balanceRow}>
            <span style={styles.balanceLabel}>Net Balance</span>
            <h3 style={styles.balance}>+$270.00</h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.heroNoise} />
        <div style={styles.heroOrb1} />
        <h2 style={styles.ctaTitle}>Start Tracking Your<br />Payments Today</h2>
        <button className="btn-primary" style={{ ...styles.primaryBtn, marginTop: "32px" }} onClick={() => navigate("/register")}>
          Create Free Account
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={styles.footerCopy}>© 2026 PaymentTracker</p>
        <div style={styles.footerLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Outfit', sans-serif",
    background: "#f8faff",
    color: "#0f172a",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 64px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 1px 0 rgba(15,23,42,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#4f46e5",
    letterSpacing: "-0.5px",
  },

  navLinks: {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },

  loginBtn: {
    padding: "9px 22px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "600",
    fontSize: "14px",
  },

  hero: {
    padding: "140px 40px 160px",
    textAlign: "center",
    background: "linear-gradient(145deg, #312e81 0%, #4f46e5 45%, #7c3aed 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },

  heroNoise: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
    pointerEvents: "none",
  },

  heroOrb1: {
    position: "absolute",
    top: "-80px",
    right: "10%",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },

  heroOrb2: {
    position: "absolute",
    bottom: "-100px",
    left: "5%",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },

  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(44px, 6vw, 76px)",
    fontWeight: "900",
    lineHeight: "1.08",
    letterSpacing: "-1.5px",
    marginBottom: "24px",
    position: "relative",
  },

  titleAccent: {
    fontStyle: "italic",
    color: "#c7d2fe",
  },

  subtitle: {
    fontSize: "18px",
    maxWidth: "580px",
    margin: "0 auto 40px",
    lineHeight: "1.75",
    color: "rgba(255,255,255,0.78)",
    fontWeight: "300",
    position: "relative",
  },

  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    position: "relative",
  },

  primaryBtn: {
    padding: "14px 32px",
    border: "none",
    background: "#ffffff",
    color: "#4f46e5",
    borderRadius: "10px",
    fontWeight: "600",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 6px 24px rgba(79,70,229,0.3)",
  },

  secondaryBtn: {
    padding: "14px 32px",
    border: "2px solid rgba(255,255,255,0.4)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "500",
    fontSize: "15px",
  },

  section: {
    padding: "100px 40px",
    textAlign: "center",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  sectionAlt: {
    padding: "100px 40px",
    background: "linear-gradient(180deg, #eef2ff 0%, #f5f3ff 100%)",
    textAlign: "center",
  },

  labelTag: {
    display: "inline-block",
    fontFamily: "'Outfit', monospace",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "3px",
    color: "#6366f1",
    background: "#eef2ff",
    border: "1px solid #c7d2fe",
    borderRadius: "100px",
    padding: "5px 14px",
    marginBottom: "18px",
  },

  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(32px, 4vw, 48px)",
    fontWeight: "700",
    letterSpacing: "-1px",
    marginBottom: "52px",
    color: "#0f172a",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    background: "white",
    padding: "36px 28px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
    textAlign: "left",
    border: "1px solid rgba(99,102,241,0.08)",
  },

  cardIcon: {
    fontSize: "24px",
    color: "#6366f1",
    marginBottom: "16px",
  },

  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#0f172a",
  },

  cardDesc: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.75",
    fontWeight: "400",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "960px",
    margin: "0 auto",
  },

  stepCard: {
    background: "white",
    padding: "32px 24px",
    borderRadius: "14px",
    boxShadow: "0 4px 16px rgba(15,23,42,0.05)",
    textAlign: "left",
    border: "2px solid #e0e7ff",
  },

  stepNum: {
    fontFamily: "'Outfit', monospace",
    fontSize: "13px",
    fontWeight: "600",
    color: "#a5b4fc",
    letterSpacing: "2px",
    marginBottom: "14px",
  },

  stepTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "17px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#0f172a",
  },

  stepDesc: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.7",
  },

  dashboard: {
    background: "linear-gradient(145deg, #1e1b4b, #1e293b)",
    color: "white",
    padding: "28px",
    borderRadius: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 30px 80px rgba(79,70,229,0.25), 0 0 0 1px rgba(99,102,241,0.15)",
  },

  dashHeader: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "24px",
  },

  dashDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#f87171",
  },

  dashLabel: {
    fontFamily: "'Outfit', monospace",
    fontSize: "11px",
    color: "#64748b",
    letterSpacing: "1.5px",
    marginLeft: "8px",
  },

  transaction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
    padding: "12px 14px",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  txLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  txAvatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "rgba(99,102,241,0.2)",
    color: "#a5b4fc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "14px",
  },

  txName: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#e2e8f0",
  },

  positive: {
    color: "#34d399",
    fontWeight: "600",
    fontFamily: "'Outfit', monospace",
    fontSize: "16px",
  },

  negative: {
    color: "#f87171",
    fontWeight: "600",
    fontFamily: "'Outfit', monospace",
    fontSize: "16px",
  },

  dashDivider: {
    height: "1px",
    background: "rgba(255,255,255,0.08)",
    margin: "16px 0",
  },

  balanceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    fontSize: "13px",
    color: "#64748b",
    fontFamily: "'Outfit', monospace",
    letterSpacing: "1px",
  },

  balance: {
    fontFamily: "'Outfit', monospace",
    fontSize: "22px",
    fontWeight: "600",
    color: "#34d399",
    textShadow: "0 0 20px rgba(52,211,153,0.4)",
  },

  cta: {
    padding: "120px 40px",
    background: "linear-gradient(145deg, #312e81 0%, #4f46e5 45%, #7c3aed 100%)",
    color: "white",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(36px, 5vw, 60px)",
    fontWeight: "900",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    position: "relative",
  },

  footer: {
    padding: "36px 40px",
    textAlign: "center",
    background: "#0f172a",
    color: "#475569",
  },

  footerCopy: {
    fontFamily: "'Outfit', monospace",
    fontSize: "13px",
    color: "#334155",
    marginBottom: "12px",
  },

  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "28px",
  },
};

export default LandingPage;