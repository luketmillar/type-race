import Toggle from 'gear/Toggle'
import React from 'react'

const App: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(false)

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: 80,
                color: darkMode ? 'white' : 'black',
                background: darkMode ? '#111112' : 'white',
                transition: 'background 0.5s'
            }}
        >
            <div>
                Hello there! This is{' '}
                <code
                    style={{
                        fontSize: 12,
                        backgroundColor: darkMode ? 'white' : 'black',
                        color: darkMode ? 'black' : 'white',
                        fontWeight: 'bold'
                    }}
                >
                    create-react-starter
                </code>
                .
            </div>
            <div
                style={{
                    marginTop: 80,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <span style={{ fontSize: 12, marginRight: 18 }}>Dark mode</span>
                <Toggle onChange={() => setDarkMode(state => !state)} />
            </div>
        </div>
    )
}

export default App
