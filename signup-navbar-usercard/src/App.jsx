import NavBar from './components/NavBar.jsx'
import UserCard from './components/UserCard.jsx'
import SignUp from './components/SignUp.jsx'

export default function App() {
  return (
    <>
      <NavBar />

      {/* Home */}
      <section className="section" id="home">
        <div className="container">
          <div className="hero">
            <h1>Frontend Tasks — React + Vite</h1>
            <p>Includes a responsive navbar, a validated sign-up form, and a reusable <code>&lt;UserCard /&gt;</code>.</p>
          </div>

          <div style={{ marginTop: 24 }}>
            <h2 style={{ marginBottom: 12 }}>Sample Users</h2>
            <div className="grid-3">
              <UserCard name="Aarav Sharma" email="aarav.sharma@example.com" />
              <UserCard name="Ishita Verma" email="ishita.verma@example.com" />
              <UserCard name="Yash Rajawat" email="yash@example.com" />
              <UserCard name="Aarnav som" email="aarnav.som@example.com" />
<UserCard name="Ishika rathod" email="ishika.rathod@example.com" />
<UserCard name="Rohan Mehta" email="rohan.mehta@example.com" />

            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>About</h2>
            <p className="subtle">
              This demo keeps things framework-agnostic: pure React components, CSS for styling, and anchor links for navigation.
              
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Contact</h2>
            <p className="subtle">This is a placeholder section. Add your contact details or a form here.</p>
          </div>
        </div>
      </section>

      {/* Sign-Up */}
      <SignUp />
    </>
  )
}
