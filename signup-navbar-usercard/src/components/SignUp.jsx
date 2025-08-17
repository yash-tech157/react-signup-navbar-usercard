import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUp() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(err => ({ ...err, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    else if (form.fullName.trim().length < 3) e.fullName = 'Full name must be at least 3 characters'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!emailRegex.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      // In real apps, send to backend here.
      setSubmitted(true)
    } else {
      setSubmitted(false)
    }
  }

  return (
    <div className="section" id="signup">
      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Create your account</h2>
          <p className="subtle" style={{ marginTop: 6, marginBottom: 18 }}>
            Quick sign-up with basic validation using React state.
          </p>

          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Yash"
                value={form.fullName}
                onChange={onChange}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && <div id="fullName-error" className="error">{errors.fullName}</div>}
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <div id="email-error" className="error">{errors.email}</div>}
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  placeholder="Minimum 6 characters"
                  value={form.password}
                  onChange={onChange}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  style={{ paddingRight: 90 }}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowPwd(s => !s)}
                  style={{ position: 'absolute', right: 6, top: 6, padding: '8px 10px' }}
                  aria-label={showPwd ? 'Hide password' : 'Show password'}
                >
                  {showPwd ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <div id="password-error" className="error">{errors.password}</div>}
            </div>

            <button type="submit" className="btn">Create account</button>
          </form>

          {submitted && (
            <div style={{ marginTop: 16 }}>
              <div className="card" style={{ borderColor: '#2a8754' }}>
                <strong>Success!</strong> Form is valid.
                <div className="subtle" style={{ marginTop: 8 }}>
                  <code>{JSON.stringify(form, null, 2)}</code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
