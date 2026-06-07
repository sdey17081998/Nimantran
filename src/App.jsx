import { useState, useEffect } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedModalImage, setSelectedModalImage] = useState(null)
  const [viewerImage, setViewerImage] = useState(null)
  const [detailCardId, setDetailCardId] = useState(null)
  const [detailImageIndex, setDetailImageIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState('cards')
  const [brokenExtras, setBrokenExtras] = useState([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('card')
    if (id) {
      setDetailCardId(Number(id))
      setSelectedTab('cards')
      setDetailImageIndex(0)
    }
  }, [])

  useEffect(() => {
    setBrokenExtras([])
    setSelectedModalImage(selectedCard ? selectedCard.image : null)
    setViewerImage(null)
  }, [selectedCard])

  useEffect(() => {
    setDetailImageIndex(0)
  }, [detailCardId])

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

  const detailCard = detailCardId ? cards.find(card => card.id === detailCardId) : null
  const detailImages = detailCard ? [detailCard.image, ...(detailCard.extraImages || [])] : []
  const currentDetailImage = detailImages[detailImageIndex] || detailCard?.image

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
                onClick={() => {
                  if (detailCardId) {
                    const url = new URL(window.location.href)
                    url.searchParams.delete('card')
                    window.history.replaceState({}, '', url)
                    setDetailCardId(null)
                  }
                  setSelectedTab('cards')
                }}
                style={buttonStyle(selectedTab === 'cards')}
              >
                Cards
              </button>
              <button
                className={`button-glow ${selectedTab === 'contact' ? 'active' : ''}`}
                onClick={() => {
                  if (detailCardId) {
                    const url = new URL(window.location.href)
                    url.searchParams.delete('card')
                    window.history.replaceState({}, '', url)
                    setDetailCardId(null)
                  }
                  setSelectedTab('contact')
                }}
                style={buttonStyle(selectedTab === 'contact')}
              >
                Contact
              </button>
              <button
                className={`button-glow ${selectedTab === 'instructions' ? 'active' : ''}`}
                onClick={() => {
                  if (detailCardId) {
                    const url = new URL(window.location.href)
                    url.searchParams.delete('card')
                    window.history.replaceState({}, '', url)
                    setDetailCardId(null)
                  }
                  setSelectedTab('instructions')
                }}
                style={buttonStyle(selectedTab === 'instructions')}
              >
                Instructions
              </button>
            </div>
          </div>
        </div>
      </header>

      {detailCard ? (
        <div style={containerStyle}>
          <div style={{ padding: '32px 0', display: 'grid', gap: '28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '28px', alignItems: 'start' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', position: 'relative' }}>
                <img
                  src={currentDetailImage}
                  alt={detailCard.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', minHeight: '420px', backgroundColor: '#f8fafc' }}
                />
                {detailImages.length > 1 && (
                  <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', backgroundColor: 'rgba(255,255,255,0.88)', padding: '8px 12px', borderRadius: '9999px', boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}>
                    <button
                      onClick={() => setDetailImageIndex((prev) => (prev - 1 + detailImages.length) % detailImages.length)}
                      style={{ border: 'none', background: '#fff', borderRadius: '9999px', padding: '8px 14px', cursor: 'pointer', fontWeight: 700, color: '#4338ca' }}
                    >
                      Prev
                    </button>
                    <span style={{ display: 'inline-flex', alignItems: 'center', color: '#4b5563', fontSize: '14px' }}>
                      {detailImageIndex + 1} / {detailImages.length}
                    </span>
                    <button
                      onClick={() => setDetailImageIndex((prev) => (prev + 1) % detailImages.length)}
                      style={{ border: 'none', background: '#fff', borderRadius: '9999px', padding: '8px 14px', cursor: 'pointer', fontWeight: 700, color: '#4338ca' }}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Card Number</p>
                  <p style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: 700, color: '#111827' }}>{detailCard.number}</p>
                </div>
                <div>
                  <h2 style={{ margin: '0 0 12px', fontSize: '30px', color: '#1f2937' }}>{detailCard.title}</h2>
                  <p style={{ margin: 0, color: '#4b5563', fontSize: '16px', lineHeight: '1.7' }}>{detailCard.description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#9333ea' }}>{detailCard.price}</span>
                  <a
                    href={detailCard.pdf || `/pdfs/card-${detailCard.id}.pdf`}
                    download
                    style={{ padding: '12px 18px', background: '#9333ea', color: 'white', borderRadius: '16px', textDecoration: 'none', fontWeight: 700 }}
                  >
                    Download PDF
                  </a>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {detailCard.features.map((feature, idx) => (
                    <span key={idx} style={{ backgroundColor: '#ede9fe', color: '#5b21b6', padding: '8px 12px', borderRadius: '9999px', fontSize: '14px' }}>{feature}</span>
                  ))}
                </div>
                <div style={{ padding: '20px', borderRadius: '20px', background: '#f3e8ff', color: '#4b5563' }}>
                  <h3 style={{ margin: '0 0 10px', fontSize: '18px', color: '#1f2937' }}>Need help?</h3>
                  <p style={{ margin: '0 0 14px', fontSize: '14px', lineHeight: '1.6' }}>Contact me with the card number for pricing, customization, and order details.</p>
                  <p style={{ margin: '0 0 8px', fontSize: '14px' }}><strong>Phone:</strong> <a href="tel:9062414676" style={{ color: '#9333ea', textDecoration: 'none' }}>9062414676</a></p>
                  <p style={{ margin: 0, fontSize: '14px' }}><strong>Email:</strong> <a href="mailto:d.sayan1998@gmail.com" style={{ color: '#9333ea', textDecoration: 'none' }}>d.sayan1998@gmail.com</a></p>
                </div>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href)
                    url.searchParams.delete('card')
                    window.history.replaceState({}, '', url)
                    setDetailCardId(null)
                    setSelectedTab('cards')
                  }}
                  style={{ marginTop: '10px', alignSelf: 'flex-start', padding: '12px 18px', borderRadius: '16px', border: 'none', cursor: 'pointer', background: '#fff', color: '#4b5563', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
                >
                  Back to Gallery
                </button>
                <div style={{ marginTop: '24px', padding: '18px', borderRadius: '16px', background: '#dbeafe', borderLeft: '5px solid #0284c7' }}>
                  <p style={{ margin: 0, color: '#0c4a6e', fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>📋 Important:</strong> Please read the <button onClick={() => {
                      const url = new URL(window.location.href)
                      url.searchParams.delete('card')
                      window.history.replaceState({}, '', url)
                      setDetailCardId(null)
                      setSelectedTab('instructions')
                    }} style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', textDecoration: 'underline', fontWeight: 700, padding: 0 }}>Instructions</button> carefully before placing an order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : selectedTab === 'cards' ? (
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
                  onClick={() => {
                    const url = new URL(window.location.href)
                    url.searchParams.set('card', card.id)
                    window.open(url.toString(), '_blank', 'noopener')
                  }}
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
      ) : selectedTab === 'contact' ? (
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
      ) : selectedTab === 'instructions' ? (
        <div style={containerStyle} className="instructions-panel">
          <div style={{ padding: '48px 0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '32px', textAlign: 'center' }}>Ordering Instructions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ padding: '24px', borderRadius: '20px', background: '#f8fafc', borderLeft: '6px solid #9333ea' }}>
                <h3 style={{ margin: '0 0 12px', fontSize: '20px', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#9333ea', color: 'white', fontWeight: 700, fontSize: '16px' }}>1</span>
                  Advance Payment
                </h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '16px', lineHeight: '1.7' }}>50% advance is required while placing the order. The remaining balance should be paid upon delivery or completion.</p>
              </div>
              <div style={{ padding: '24px', borderRadius: '20px', background: '#f8fafc', borderLeft: '6px solid #9333ea' }}>
                <h3 style={{ margin: '0 0 12px', fontSize: '20px', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#9333ea', color: 'white', fontWeight: 700, fontSize: '16px' }}>2</span>
                  Minimum Order Quantity
                </h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '16px', lineHeight: '1.7' }}>Cards must be ordered in multiples of 25 (25, 50, 75, 100, and so on). Bulk orders may be eligible for special discounts.</p>
              </div>
              <div style={{ padding: '24px', borderRadius: '20px', background: '#f8fafc', borderLeft: '6px solid #9333ea' }}>
                <h3 style={{ margin: '0 0 12px', fontSize: '20px', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#9333ea', color: 'white', fontWeight: 700, fontSize: '16px' }}>3</span>
                  Printing Charges
                </h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '16px', lineHeight: '1.7' }}>Printing cost is applicable separately and will be calculated based on the card design, quantity, and paper quality you select.</p>
              </div>
              <div style={{ padding: '24px', borderRadius: '20px', background: '#f8fafc', borderLeft: '6px solid #9333ea' }}>
                <h3 style={{ margin: '0 0 12px', fontSize: '20px', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: '#9333ea', color: 'white', fontWeight: 700, fontSize: '16px' }}>4</span>
                  Shipping & Courier
                </h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '16px', lineHeight: '1.7' }}>Shipping and courier charges are applicable separately and will be calculated based on your delivery location, distance, and the weight of the order.</p>
              </div>
              <div style={{ marginTop: '16px', padding: '20px', borderRadius: '16px', background: '#fef3c7', borderLeft: '6px solid #f59e0b' }}>
                <p style={{ margin: 0, color: '#78350f', fontSize: '15px', lineHeight: '1.6' }}><strong>💡 Tip:</strong> Contact me for a detailed quote including all charges before finalizing your order.</p>
              </div>
            </div>
          </div>
        </div>
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
