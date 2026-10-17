import { useEffect, useRef, useState } from 'react'
import './App.css'

const formEndpoint = 'https://formsubmit.co/ajax/ivanevic477@gmail.com'

const icons = {
  book: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  percent: (
    <>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  check: <polyline points="20 6 9 17 4 12" />,
}

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

const services = [
  { icon: 'book', color: 'green', title: 'Knjigovodstvo', text: 'Redovito i točno vođenje poslovnih knjiga za obrte, d.o.o. i druge poslovne subjekte.' },
  { icon: 'users', color: 'sun', title: 'Obračun plaća', text: 'Obračun plaća i naknada, prijave i izvješća prema važećim propisima.' },
  { icon: 'percent', color: 'sky', title: 'Porezi i PDV', text: 'Priprema i predaja poreznih prijava, uz savjete kako poslovati jednostavnije i povoljnije.' },
  { icon: 'briefcase', color: 'coral', title: 'Osnivanje obrta i društava', text: 'Pomoć pri otvaranju obrta ili d.o.o.-a, od prve ideje do prvog računa.' },
  { icon: 'file', color: 'green', title: 'Financijska izvješća', text: 'Godišnji financijski izvještaji i pregledi poslovanja koje je lako razumjeti.' },
  { icon: 'chat', color: 'sun', title: 'Savjetovanje', text: 'Odgovori na vaša pitanja o poslovanju, računima i obvezama, bez komplicirane terminologije.' },
]

const reasons = [
  'Jasna komunikacija bez stručnog žargona',
  'Vaši podaci uvijek ažurni i na jednom mjestu',
  'Rokovi i prijave pod kontrolom, bez stresa',
  'Osobni pristup svakom klijentu',
]

const steps = [
  { title: 'Javite nam se', text: 'Pošaljite upit i ukratko opišite svoje poslovanje.' },
  { title: 'Dogovorimo suradnju', text: 'Zajedno odredimo što vam treba i kako ćemo surađivati.' },
  { title: 'Prepustite brojke nama', text: 'Mi preuzimamo knjigovodstvo, a vi se vraćate svom poslu.' },
]

const audiences = [
  { color: 'green', title: 'Obrtnici', text: 'Paušalni i dohodovni obrt: knjige, porezi i doprinosi bez papirologije.' },
  { color: 'sun', title: 'Freelanceri', text: 'Računi, prihodi i porez na jednom mjestu, da znate koliko vam stvarno ostaje.' },
  { color: 'sky', title: 'D.o.o. i tvrtke', text: 'Cjelovito knjigovodstvo, plaće i godišnja izvješća za društva svih veličina.' },
  { color: 'coral', title: 'Novi poduzetnici', text: 'Od odabira oblika poslovanja do prvog računa, vodimo vas korak po korak.' },
]

const faqs = [
  { q: 'Koliko košta knjigovodstvo?', a: 'Cijena ovisi o vrsti poslovanja i broju dokumenata. Javite nam se i dobit ćete jasnu ponudu unaprijed, bez skrivenih troškova.' },
  { q: 'Mogu li prijeći k vama usred godine?', a: 'Da. Preuzimamo knjigovodstvo u bilo kojem trenutku i brinemo se da prijelaz prođe bez problema.' },
  { q: 'Trebam li donositi dokumente osobno?', a: 'Ne mora biti tako. Dokumente možete poslati e-poštom, a mi se javljamo ako nešto nedostaje.' },
  { q: 'Pomažete li pri otvaranju obrta ili d.o.o.-a?', a: 'Naravno. Savjetujemo koji oblik poslovanja vam najviše odgovara i vodimo vas kroz cijeli postupak.' },
]

const navLinks = [
  ['#usluge', 'Usluge'],
  ['#za-koga', 'Za koga'],
  ['#zasto', 'Zašto mi'],
  ['#kako', 'Kako radimo'],
  ['#kontakt', 'Kontakt'],
]

const year = new Date().getFullYear()

const NAV_H = 68
const SCROLL_PER_CARD = 55

function App() {
  const [status, setStatus] = useState('idle')
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const stackRef = useRef(null)

  useEffect(() => {
    const el = stackRef.current
    const stage = el.firstElementChild
    const last = services.length - 1

    function onScroll() {
      const range = el.offsetHeight - stage.offsetHeight
      if (range <= 0) return
      const p = Math.min(1, Math.max(0, (NAV_H - el.getBoundingClientRect().top) / range))
      setActive(Math.min(last, Math.floor(p * services.length)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function goToCard(i) {
    const el = stackRef.current
    const range = el.offsetHeight - el.firstElementChild.offsetHeight
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_H
    window.scrollTo({ top: top + ((i + 0.5) / services.length) * range, behavior: 'smooth' })
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = document.querySelectorAll('.fade')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 },
    )
    targets.forEach((el) => {
      const i = Array.from(el.parentElement.children).indexOf(el)
      el.style.setProperty('--d', `${(i % 3) * 90}ms`)
      el.classList.add('pending')
      observer.observe(el)
    })
    return () => {
      observer.disconnect()
      targets.forEach((el) => el.classList.remove('pending', 'in'))
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Upit s web stranice Eva-Prom: ${d.name}`,
          _template: 'table',
          _honey: d._honey,
          name: d.name,
          email: d.email,
          phone: d.phone,
          message: d.message,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Eva-Prom" className="brand-logo" />
          </a>
          <nav className="nav-links" aria-label="Glavni izbornik">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a href="#kontakt" className="btn btn-small">Zatražite ponudu</a>
            <button
              type="button"
              className={`hamburger${menuOpen ? ' open' : ''}`}
              aria-label="Otvori izbornik"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <nav aria-label="Mobilni izbornik" inert={!menuOpen}>
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="pill">Knjigovodstvo i računovodstvene usluge</p>
              <h1>
                Brojke prepustite <span className="hl">nama</span>, a vi se posvetite poslu.
              </h1>
              <p className="lead">
                Eva-Prom vodi knjigovodstvo, plaće i porezne obveze za obrte i tvrtke,
                jasno, točno i na vrijeme.
              </p>
              <div className="hero-actions">
                <a href="#kontakt" className="btn">Zatražite ponudu</a>
                <a href="#usluge" className="btn btn-ghost">Pogledajte usluge</a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="blob blob-a" />
              <div className="blob blob-b" />
              <div className="hero-card">
                <p className="hero-card-title">Sve je u redu</p>
                <ul>
                  <li><Icon name="check" /> Knjige ažurne</li>
                  <li><Icon name="check" /> Plaće obračunate</li>
                  <li><Icon name="check" /> Prijave predane</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="usluge"
          ref={stackRef}
          className="section stack-section"
          style={{ height: `calc(100vh - ${NAV_H}px + ${(services.length - 1) * SCROLL_PER_CARD}vh)` }}
        >
          <div className="stack-stage">
            <div className="container">
              <h2>Naše usluge</h2>
              <p className="section-lead">Sve što vašem poslovanju treba na jednom mjestu.</p>
            </div>
            <ul className="stack">
              {services.map((s, i) => {
                const o = i - active
                return (
                  <li
                    key={s.title}
                    className={`stack-card ${s.color}`}
                    data-state={o < 0 ? 'past' : o === 0 ? 'current' : 'future'}
                    style={{ '--o': o, zIndex: services.length - Math.abs(o) }}
                  >
                    <span className="stack-count">
                      {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                    <span className={`icon ${s.color}`}><Icon name={s.icon} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                )
              })}
            </ul>
            <div className="stack-controls">
              <button
                type="button"
                className="stack-btn"
                aria-label="Prethodna usluga"
                disabled={active === 0}
                onClick={() => goToCard(active - 1)}
              >
                ‹
              </button>
              <div className="stack-dots">
                {services.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    className={i === active ? 'on' : ''}
                    aria-label={s.title}
                    aria-current={i === active}
                    onClick={() => goToCard(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="stack-btn"
                aria-label="Sljedeća usluga"
                disabled={active === services.length - 1}
                onClick={() => goToCard(active + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section id="za-koga" className="section soft">
          <div className="container">
            <h2>Za koga radimo</h2>
            <p className="section-lead">Bez obzira na to tek počinjete ili već imate tvrtku, imamo rješenje za vas.</p>
            <ul className="grid audiences">
              {audiences.map((a) => (
                <li key={a.title} className={`card aud ${a.color} fade`}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="zasto" className="section">
          <div className="container why">
            <div>
              <h2 className="left">Računovodstvo bez stresa</h2>
              <p className="section-lead left">
                Znamo da brojke nisu svačiji hobi. Zato ih preuzimamo i objašnjavamo ih
                jednostavno.
              </p>
            </div>
            <ul className="reasons">
              {reasons.map((r) => (
                <li key={r} className="fade">
                  <span className="tick"><Icon name="check" /></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kako" className="section">
          <div className="container">
            <h2>Kako radimo</h2>
            <p className="section-lead">Tri jednostavna koraka do mirnog poslovanja.</p>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="fade">
                  <span className="step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section soft">
          <div className="container faq-wrap">
            <h2>Česta pitanja</h2>
            <p className="section-lead">Odgovori na ono što nas klijenti najčešće pitaju.</p>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q} className="fade">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner">
            <h2>Spremni za mirnije poslovanje?</h2>
            <a href="#kontakt" className="btn btn-light">Zatražite besplatnu ponudu</a>
          </div>
        </section>

        <section id="kontakt" className="section contact">
          <div className="container contact-inner">
            <div className="contact-text">
              <h2 className="left">Javite nam se</h2>
              <p className="section-lead left">
                Opišite nam svoje poslovanje ili postavite pitanje. Odgovorit ćemo vam što prije.
              </p>
            </div>
            <form className="form fade" onSubmit={handleSubmit}>
              <label>
                Ime i prezime
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <div className="form-row">
                <label>
                  E-mail
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Telefon
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>
              <label>
                Poruka
                <textarea name="message" rows="4" placeholder="Kako vam možemo pomoći?" required />
              </label>
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="honey" aria-hidden="true" />
              <button type="submit" className="btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Slanje…' : 'Zatražite ponudu'}
              </button>
              {status === 'sent' && (
                <p className="form-msg" role="status">Hvala! Vaš upit je poslan. Javit ćemo vam se uskoro.</p>
              )}
              {status === 'error' && (
                <p className="form-msg error" role="alert">Nešto je pošlo po zlu. Molimo pokušajte ponovno kasnije.</p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="brand">
            <img src="/logo.png" alt="Eva-Prom" className="brand-logo" />
          </span>
          <p>© {year} Eva-Prom. Sva prava pridržana.</p>
        </div>
        <div className="container">
          <p className="credit">Created by Sindr</p>
        </div>
      </footer>
    </>
  )
}

export default App
