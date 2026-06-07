import { useState, useEffect } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedModalImage, setSelectedModalImage] = useState(null)
  const [viewerImage, setViewerImage] = useState(null)
  const [selectedTab, setSelectedTab] = useState('cards')
  const [brokenExtras, setBrokenExtras] = useState([])

  useEffect(() => {
    setBrokenExtras([])
    setSelectedModalImage(selectedCard ? selectedCard.image : null)
    setViewerImage(null)
  }, [selectedCard])

  const categories = [
    { id: 'all', name: 'All Cards' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'rice-ceremony', name: 'Rice Ceremony' },
  ]

  const cards = [
    {
      id: 1,
      number: 'C101',
      category: 'wedding',
      title: 'Traditional Hindu Wedding Card',
      description: 'Elegant design with peacock motifs and gold foil work',
      price: '₹85',
      features: ['Peacock design', 'Gold foil', 'Premium paper'],
      image: '/images/wedding-1.jpg',
      pdf: '/pdfs/card1.pdf',
      extraImages: ['/images/wedding-1-1.jpg', '/images/wedding-1-2.jpg']
    },
    {
      id: 2,
      number: 'C102',
      category: 'wedding',
      title: 'Royal Wedding Invitation',
      description: 'Luxurious card with mandala patterns and embossing',
      price: '₹95',
      features: ['Mandala art', 'Embossed', 'Royal finish'],
      image: '/images/wedding-2.jpg',
      pdf: '/pdfs/card-2.pdf',
      extraImages: ['/images/wedding-2-1.jpg']
    },
    {
      id: 3,
      number: 'C103',
      category: 'birthday',
      title: 'Birthday Celebration Card',
      description: 'Colorful design with rangoli patterns and festive theme',
      price: '₹35',
      features: ['Rangoli art', 'Bright colors', 'Glossy finish'],
      image: '/images/birthday-1.jpg',
      pdf: '/pdfs/card-3.pdf',
      extraImages: ['/images/birthday-1-1.jpg', '/images/birthday-1-2.jpg']
    },
    {
      id: 4,
      number: 'C104',
      category: 'birthday',
      title: 'First Birthday Invitation',
      description: 'Special card for baby first birthday with cute designs',
      price: '₹45',
      features: ['Baby theme', 'Custom age', 'Soft colors'],
      image: '/images/birthday-2.jpg',
      pdf: '/pdfs/card-4.pdf'
    },
    {
      id: 5,
      number: 'C105',
      category: 'rice-ceremony',
      title: 'Annaprashan Ceremony Card',
      description: 'Traditional rice ceremony invitation with auspicious symbols',
      price: '₹55',
      features: ['Om symbol', 'Traditional', 'Cultural'],
      image: '/images/rice-ceremony-1.jpg',
      pdf: '/pdfs/card-5.pdf'
    },
    {
      id: 6,
      number: 'C106',
      category: 'rice-ceremony',
      title: 'Mukhagni Ceremony Card',
      description: 'Sacred ceremony card with traditional Indian motifs',
      price: '₹65',
      features: ['Sacred symbols', 'Traditional', 'Premium'],
      image: '/images/rice-ceremony-2.jpg',
      pdf: '/pdfs/card-6.pdf'
    },
    {
      id: 7,
      number: 'C107',
      category: 'wedding',
      title: 'Bengali Wedding Invitation',
      description: 'Traditional Bengali wedding card with shakha pola design',
      price: '₹75',
      features: ['Bengali theme', 'Shakha pola', 'Traditional'],
      image: '/images/wedding-3.jpg',
      pdf: '/pdfs/card-7.pdf'
    },
    {
      id: 8,
      number: 'C108',
      category: 'birthday',
      title: 'Birthday Bash Card',
      description: 'Fun and vibrant birthday card with confetti design',
      price: '₹25',
      features: ['Confetti', 'Vibrant', 'Party theme'],
      image: '/images/birthday-3.jpg',
      pdf: '/pdfs/card-8.pdf'
    },
    {
      id: 9,
      number: 'C109',
      category: 'rice-ceremony',
      title: 'Namkaran Ceremony Card',
      description: 'Naming ceremony card with traditional Indian aesthetics',
      price: '₹40',
      features: ['Naming theme', 'Traditional', 'Elegant'],
      image: '/images/rice-ceremony-3.jpg',
      pdf: '/pdfs/card-9.pdf'
    },
  ]

  const filteredCards = selectedCategory === 'all' 
    ? cards 
    : cards.filter(card => card.category === selectedCategory)

  const headerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 10
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  }

  const buttonStyle = (isSelected) => ({
    padding: '12px 24px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: isSelected 
      ? 'linear-gradient(to right, #9333ea, #ec4899)' 
      : 'white',
    color: isSelected ? 'white' : '#374151',
    boxShadow: isSelected ? '0 10px 15px -3px rgba(168, 85, 247, 0.2)' : '0 1px 2px rgba(0, 0, 0, 0.05)'
  })

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s'
  }

  const getCardImageStyle = (category) => {
    const gradients = {
      'wedding': 'linear-gradient(to bottom right, #fbbf24, #dc2626)',
      'birthday': 'linear-gradient(to bottom right, #f472b6, #8b5cf6)',
      'rice-ceremony': 'linear-gradient(to bottom right, #fcd34d, #f97316)'
    }
    return {
      height: '192px',
      background: gradients[category] || gradients['wedding'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }

  const getCardEmoji = (category) => {
    const emojis = {
      'wedding': '💒',
      'birthday': '🎂',
      'rice-ceremony': '🙏'
    }
    return emojis[category] || '🎴'
  }

  const modalStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    padding: '16px'
  }

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '24px',
    maxWidth: '672px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  }

  const viewerOverlayStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 60,
    padding: '16px'
  }

  const viewerContentStyle = {
    position: 'relative',
    maxWidth: '96%',
    maxHeight: '96%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div className="page-root" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header className="site-header" style={headerStyle}>
        <div style={containerStyle}>
          <div style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>
              নিমন্ত্রণ
            </h1>
            <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto' }}>
              <button
                className={`button-glow ${selectedTab === 'cards' ? 'active' : ''}`}
                onClick={() => setSelectedTab('cards')}
                style={buttonStyle(selectedTab === 'cards')}
              >
                Cards
              </button>
              <button
                className={`button-glow ${selectedTab === 'contact' ? 'active' : ''}`}
                onClick={() => setSelectedTab('contact')}
                style={buttonStyle(selectedTab === 'contact')}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      {selectedTab === 'cards' ? (
        <>
          <div style={containerStyle}>
            <div style={{ padding: '32px 0', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="button-glow"
                  onClick={() => setSelectedCategory(category.id)}
                  style={buttonStyle(selectedCategory === category.id)}
                  onMouseEnter={(e) => {
                    if (!selectedCategory === category.id) {
                      e.target.style.backgroundColor = '#f3e8ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedCategory === category.id) {
                      e.target.style.backgroundColor = 'white'
                    }
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div style={containerStyle}>
            <div style={{ paddingBottom: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {filteredCards.map((card, idx) => (
                <div
                  key={card.id}
                  className="card-item fade-in-up"
                  style={{ ...cardStyle, animationDelay: `${idx * 0.05}s` }}
                  onClick={() => setSelectedCard(card)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={getCardImageStyle(card.category)}>
                    <img 
                      src={card.image} 
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', backgroundColor: 'transparent' }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.querySelector('span').style.display = 'block'
                      }}
                    />
                    <span style={{ fontSize: '48px', display: 'none' }}>{getCardEmoji(card.category)}</span>
                    <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', padding: '4px 12px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, color: '#dc2626' }}>
                      {card.price}
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>{card.title}</h3>
                    <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Card Number: <strong>{card.number}</strong></p>
                    <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '12px' }}>{card.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {card.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="feature-badge"
                          style={{ fontSize: '12px', backgroundColor: '#e9d5ff', color: '#9333ea', padding: '4px 8px', borderRadius: '9999px' }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: '12px' }}>
                      <a
                        href={card.pdf}
                        download
                        onClick={(e) => { e.stopPropagation(); }}
                        style={{ display: 'inline-block', padding: '8px 12px', background: '#9333ea', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 700 }}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div style={containerStyle} className="contact-panel">
          <div style={{ padding: '48px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Contact Me</h2>
            <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '24px' }}>
              Call or email me with the card number. I will help you with pricing, customizations, and order details.
            </p>
            <div style={{ display: 'grid', gap: '18px', background: 'white', padding: '24px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '24px', rowGap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Phone</span>
                <a href="tel:9062414676" style={{ fontSize: '18px', fontWeight: 700, color: '#9333ea', textDecoration: 'none' }}>9062414676</a>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Email</span>
                <a href="mailto:d.sayan1998@gmail.com" style={{ fontSize: '18px', fontWeight: 700, color: '#9333ea', textDecoration: 'none' }}>d.sayan1998@gmail.com</a>
              </div>
              <div style={{ marginTop: '8px', padding: '16px', background: '#f3e8ff', borderRadius: '16px' }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}><strong>Note:</strong> Please mention the card number when you contact me.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Detail Modal */}
      {selectedCard && (
        <div className="modal-overlay" style={modalStyle} onClick={() => setSelectedCard(null)}>
          <div className="modal-pop" style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '256px', overflow: 'hidden', background: getCardImageStyle(selectedCard.category).background, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={selectedModalImage || selectedCard.image}
                alt={selectedCard.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', position: 'relative', cursor: 'pointer' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.querySelector('span').style.display = 'block'
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setViewerImage(selectedModalImage || selectedCard.image)
                }}
              />
              <span style={{ fontSize: '96px', display: 'none' }}>{getCardEmoji(selectedCard.category)}</span>
              <button
                onClick={() => setSelectedCard(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', padding: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: '20px', zIndex: 10 }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>{selectedCard.title}</h2>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#9333ea' }}>{selectedCard.price}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '-8px', marginBottom: '16px' }}>Card Number: <strong>{selectedCard.number}</strong></p>
              <div style={{ marginBottom: '16px' }}>
                <a
                  href={selectedCard.pdf || `/pdfs/card-${selectedCard.id}.pdf`}
                  download
                  onClick={(e) => e.stopPropagation()}
                  style={{ display: 'inline-block', padding: '10px 14px', background: '#9333ea', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 700 }}
                >
                  Download PDF
                </a>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '24px' }}>{selectedCard.description}</p>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: '12px' }}>Features:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedCard.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{ backgroundColor: '#e9d5ff', color: '#9333ea', padding: '8px 12px', borderRadius: '9999px', fontSize: '14px' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              {selectedCard.extraImages && selectedCard.extraImages.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: '12px' }}>More Images</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    {selectedCard.extraImages.slice(0,2).map((img, idx) => (
                      <div key={idx} style={{ borderRadius: '12px', overflow: 'hidden', background: '#fff', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {!brokenExtras.includes(idx) ? (
                          <img
                            src={img}
                            alt=""
                            style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', opacity: selectedModalImage === img ? 0.85 : 1, transform: selectedModalImage === img ? 'scale(1.02)' : 'scale(1)', transition: 'all 0.2s ease' }}
                            onClick={() => setSelectedModalImage(img)}
                            onError={() => setBrokenExtras(prev => prev.includes(idx) ? prev : [...prev, idx])}
                          />
                        ) : (
                          <div style={{ width: '100%', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', borderRadius: '8px' }}>
                            <span style={{ color: '#9ca3af' }}>No preview</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {viewerImage && (
        <div style={viewerOverlayStyle} onClick={() => setViewerImage(null)}>
          <div style={viewerContentStyle} onClick={(e) => e.stopPropagation()}>
            <img
              src={viewerImage}
              alt="Full screen card"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '20px', boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}
            />
            <button
              onClick={() => setViewerImage(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '9999px', width: '44px', height: '44px', cursor: 'pointer', fontSize: '18px', fontWeight: 700 }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
