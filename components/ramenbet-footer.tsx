const HASHTAGS: Array<{ label: string; href: string }> = [
  { label: '#ramenbet', href: '#glavnaya' },
  { label: '#раменбет', href: '#glavnaya' },
  { label: '#ramenbet_официальный_сайт', href: '#ofsayt' },
  { label: '#раменбет_официальный_сайт', href: '#ofsayt' },
  { label: '#ramenbet_зеркало', href: '#zerkalo' },
  { label: '#раменбет_зеркало', href: '#zerkalo' },
  { label: '#ramenbet_рабочее_зеркало', href: '#zerkalo' },
  { label: '#ramenbet_казино', href: '#kazino' },
  { label: '#раменбет_казино', href: '#kazino' },
  { label: '#рамен_бет', href: '#ramen-bet' },
  { label: '#ramen_bet', href: '#ramen-bet' },
]

export function RamenbetFooter() {
  return (
    <footer className="kx7q-footer" id="footer">
      <p className="kx7q-footer-lead">Поиск по разделам Ramenbet:</p>
      <nav className="kx7q-hashrow" aria-label="Поиск по ключевым темам сайта">
        {HASHTAGS.map((tag) => (
          <a key={tag.label} href={tag.href} className="kx7q-hashtag">
            {tag.label}
          </a>
        ))}
      </nav>
      <p className="kx7q-legal">
        Ramenbet — 18+. Азартные игры могут вызывать зависимость: играйте ответственно и
        устанавливайте личные лимиты. Раменбет не является гарантией дохода.
      </p>
    </footer>
  )
}
