import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  // Create different types of fart sounds using Web Audio API
  const createFartSound = (type: 'wet' | 'dry' | 'squeaky' | 'bass' | 'quick') => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    
    // Create oscillator for the main sound
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    // Create filter for shaping the sound
    const filter = audioContext.createBiquadFilter()
    filter.type = 'lowpass'
    
    // Connect the audio nodes
    oscillator.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    // Set initial volume
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    
    switch (type) {
      case 'wet':
        // Wet fart - lower frequency with noise
        oscillator.frequency.setValueAtTime(80, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.3)
        filter.frequency.setValueAtTime(200, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.4)
        break
        
      case 'dry':
        // Dry fart - higher frequency, shorter
        oscillator.frequency.setValueAtTime(120, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + 0.2)
        filter.frequency.setValueAtTime(300, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.25)
        break
        
      case 'squeaky':
        // Squeaky fart - high frequency with modulation
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.15)
        filter.frequency.setValueAtTime(500, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.2)
        break
        
      case 'bass':
        // Bass fart - very low frequency, longer
        oscillator.frequency.setValueAtTime(50, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(30, audioContext.currentTime + 0.5)
        filter.frequency.setValueAtTime(150, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.6)
        break
        
      case 'quick':
        // Quick fart - very short burst
        oscillator.frequency.setValueAtTime(100, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + 0.1)
        filter.frequency.setValueAtTime(250, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.15)
        break
    }
  }

  const playRandomFartSound = () => {
    const fartTypes: Array<'wet' | 'dry' | 'squeaky' | 'bass' | 'quick'> = ['wet', 'dry', 'squeaky', 'bass', 'quick']
    const randomType = fartTypes[Math.floor(Math.random() * fartTypes.length)]
    createFartSound(randomType)
  }

  const handleSquish = (element: HTMLElement) => {
    element.classList.add('squish')
    setTimeout(() => element.classList.remove('squish'), 600)
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSquish(e.currentTarget)
    playRandomFartSound()
  }

  return (
    <div className="container">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="icon-large float">💩</div>
        <h1 className="title">Liquid Excrement</h1>
        <p className="subtitle">The Most Bodacious Component Library Ever Created</p>
        <p className="pun-text">Because sometimes you just need to let your components flow naturally! 💨</p>
      </div>

      {/* Buttons Section */}
      <div className="component-showcase">
        <h2 className="section-title">Button Components - Press to Feel the Squish! 🎯</h2>
        <div className="component-grid">
          <div className="card">
            <div className="card-header">Primary Buttons</div>
            <div className="card-body">
              <button className="btn btn-primary" onClick={handleButtonClick}>
                💩 Primary Poo
              </button>
              <button className="btn btn-primary" onClick={handleButtonClick}>
                🚽 Flush It
              </button>
              <p className="pun-text">These buttons are solid as a rock... or should we say, solid as a log? 😏</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Secondary Buttons</div>
            <div className="card-body">
              <button className="btn btn-secondary" onClick={handleButtonClick}>
                🌫️ Glassy Gas
              </button>
              <button className="btn btn-secondary" onClick={handleButtonClick}>
                💨 Float Away
              </button>
              <p className="pun-text">Transparent as morning gas, but twice as elegant! ✨</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Action Buttons</div>
            <div className="card-body">
              <button className="btn btn-success" onClick={handleButtonClick}>
                ✅ Success Story
              </button>
              <button className="btn btn-warning" onClick={handleButtonClick}>
                ⚠️ Gas Warning
              </button>
              <button className="btn btn-danger" onClick={handleButtonClick}>
                🚨 Emergency Exit
              </button>
              <p className="pun-text">When you need to make a statement, make it count! 💪</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="component-showcase">
        <h2 className="section-title">Card Components - Float Like a Butterfly, Stink Like a... 🦋</h2>
        <div className="component-grid">
          <div className="card">
            <div className="card-header">💩 Poo Facts</div>
            <div className="card-body">
              <p>Did you know? The average person produces about 1 pound of poop per day! That's a lot of material for our components to work with! 📊</p>
              <p className="pun-text">Talk about sustainable design! 🌱</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">🚽 Toilet Wisdom</div>
            <div className="card-body">
              <p>"Life is like a toilet - sometimes you're up, sometimes you're down, but you always end up in the same place!" 🎭</p>
              <p className="pun-text">Deep thoughts from the throne! 👑</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">💨 Gas Laws</div>
            <div className="card-body">
              <p>According to Boyle's Law: When pressure increases, volume decreases. Just like when you hold in a fart too long! 📚</p>
              <p className="pun-text">Science is everywhere, even in the bathroom! 🔬</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="component-showcase">
        <h2 className="section-title">Input Components - Type Your Heart Out! ⌨️</h2>
        <div className="component-grid">
          <div className="card">
            <div className="card-header">Text Inputs</div>
            <div className="card-body">
              <input 
                type="text" 
                className="input" 
                placeholder="Enter your deepest thoughts..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <input 
                type="email" 
                className="input" 
                placeholder="your.email@poop.com"
              />
              <p className="pun-text">These inputs are so smooth, they'll make you want to type all day! 🎯</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Interactive Demo</div>
            <div className="card-body">
              <p>Current input value: <strong>{inputValue || 'Nothing yet...'}</strong></p>
              <button 
                className="btn btn-primary" 
                onClick={(e) => {
                  setInputValue('💩 Liquid Excrement is the best! 💩')
                  handleButtonClick(e)
                }}
              >
                Fill with Poo Love
              </button>
              <p className="pun-text">Watch the magic happen! ✨</p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="component-showcase">
        <h2 className="section-title">Badge Components - Small but Mighty! 🏷️</h2>
        <div className="component-grid">
          <div className="card">
            <div className="card-header">Status Badges</div>
            <div className="card-body">
              <span className="badge badge-primary">💩 Primary</span>
              <span className="badge badge-success">✅ Success</span>
              <span className="badge badge-warning">⚠️ Warning</span>
              <span className="badge badge-danger">🚨 Danger</span>
              <p className="pun-text">These badges are like little flags for your content! 🚩</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Fun Badges</div>
            <div className="card-body">
              <span className="badge badge-primary">🚽 Toilet</span>
              <span className="badge badge-success">🧻 TP</span>
              <span className="badge badge-warning">💨 Gas</span>
              <span className="badge badge-danger">🚨 Emergency</span>
              <p className="pun-text">Every situation has its badge! 🎖️</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="component-showcase">
        <h2 className="section-title">Alert Components - Don't Panic! 🚨</h2>
        <div className="component-grid">
          <div className="card">
            <div className="card-header">Alert Types</div>
            <div className="card-body">
              <div 
                className="alert alert-info" 
                role="alert" 
                aria-label="Information alert"
                tabIndex={0}
              >
                <span className="sr-only">Information: </span>
                💡 <strong>Info:</strong> This component library is absolutely amazing!
              </div>
              <div 
                className="alert alert-success" 
                role="alert" 
                aria-label="Success alert"
                tabIndex={0}
              >
                <span className="sr-only">Success: </span>
                ✅ <strong>Success:</strong> You've successfully loaded Liquid Excrement!
              </div>
              <div 
                className="alert alert-warning" 
                role="alert" 
                aria-label="Warning alert"
                tabIndex={0}
              >
                <span className="sr-only">Warning: </span>
                ⚠️ <strong>Warning:</strong> Too much fun may cause uncontrollable laughter!
              </div>
              <div 
                className="alert alert-danger" 
                role="alert" 
                aria-label="Danger alert"
                tabIndex={0}
              >
                <span className="sr-only">Danger: </span>
                🚨 <strong>Danger:</strong> This library is dangerously addictive!
              </div>
              <p className="pun-text">Alerts that actually make you want to read them! 📖</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Interactive Alert</div>
            <div className="card-body">
              <button 
                className="btn btn-warning" 
                onClick={(e) => {
                  setShowAlert(!showAlert)
                  handleButtonClick(e)
                }}
                aria-expanded={showAlert}
                aria-controls="interactive-alert"
              >
                {showAlert ? 'Hide Alert' : 'Show Alert'}
              </button>
              {showAlert && (
                <div 
                  id="interactive-alert"
                  className="alert alert-info mt-2" 
                  role="alert"
                  aria-label="Interactive information alert"
                  tabIndex={0}
                >
                  <span className="sr-only">Information: </span>
                  🎉 <strong>Interactive Alert:</strong> You clicked the button! You're getting the hang of this!
                </div>
              )}
              <p className="pun-text">Click to see the magic! ✨</p>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Section */}
      <div className="component-showcase">
        <h2 className="section-title">Layout Components - Organize Your Chaos! 📐</h2>
        <div className="component-grid">
          <div className="card">
            <div className="card-header">Row & Column Layout</div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">Column 1</div>
                    <div className="card-body">
                      <p>First column content</p>
                      <span className="badge badge-primary">💩</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-header">Column 2</div>
                    <div className="card-body">
                      <p>Second column content</p>
                      <span className="badge badge-success">✅</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pun-text">Responsive layout that adapts to any screen size! 📱</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="component-showcase">
        <div className="text-center">
          <h2 className="section-title">Thanks for Exploring Liquid Excrement! 🎉</h2>
          <p className="pun-text">Remember: Life is like a component library - it's all about the flow! 💨</p>
          <div className="icon-large bubble">💩</div>
          <p>Made with 💩 and lots of 💨</p>
        </div>
      </div>
    </div>
  )
}

export default App
