export default function Contact() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        minHeight: 'calc(100vh - 72px)',
        background: 'linear-gradient(160deg,#dbeafe 0%,#eff6ff 60%,#f0f9ff 100%)',
        padding: '4rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ maxWidth: '560px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', padding: '0.35rem 1rem',
              borderRadius: '9999px', border: '1.5px solid #60a5fa',
              color: '#1d4ed8', fontSize: '0.82rem', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem',
            }}>Contact Us</span>
            <h1 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800, color: '#0a1f44', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Enquire Now
            </h1>
            <p style={{ fontSize: '1rem', color: '#4b5563', marginTop: '0.75rem' }}>
              Fill in the form below and our team will get back to you within 24 hours.
            </p>
          </div>
          <form
            id="enquiry-form"
            style={{
              background: 'white', borderRadius: '1.5rem',
              padding: '2.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
            onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.') }}
          >
            {[
              { id: 'name',    label: 'Full Name',      type: 'text',  placeholder: 'Your full name' },
              { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'your@email.com' },
              { id: 'phone',   label: 'Phone Number',   type: 'tel',   placeholder: '+91 xxxxxxxxxx' },
            ].map(field => (
              <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor={field.id} style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1f2937' }}>
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  style={{
                    padding: '0.75rem 1rem', borderRadius: '0.75rem',
                    border: '1.5px solid #e5e7eb', fontSize: '0.95rem',
                    outline: 'none', transition: 'border 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => { e.target.style.border = '1.5px solid #2563eb' }}
                  onBlur={e => { e.target.style.border = '1.5px solid #e5e7eb' }}
                />
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="exam" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1f2937' }}>
                Exam of Interest
              </label>
              <select
                id="exam"
                style={{
                  padding: '0.75rem 1rem', borderRadius: '0.75rem',
                  border: '1.5px solid #e5e7eb', fontSize: '0.95rem',
                  background: 'white', fontFamily: 'inherit',
                }}
              >
                <option value="">Select an exam…</option>
                <option>A2 Key (KET)</option>
                <option>B1 Preliminary (PET)</option>
                <option>B2 First (FCE)</option>
                <option>C1 Advanced (CAE)</option>
                <option>C2 Proficiency (CPE)</option>
                <option>Teaching Knowledge Test (TKT)</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1f2937' }}>
                Message (optional)
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Any questions or additional information…"
                style={{
                  padding: '0.75rem 1rem', borderRadius: '0.75rem',
                  border: '1.5px solid #e5e7eb', fontSize: '0.95rem',
                  resize: 'vertical', fontFamily: 'inherit',
                }}
                onFocus={e => { e.target.style.border = '1.5px solid #2563eb' }}
                onBlur={e => { e.target.style.border = '1.5px solid #e5e7eb' }}
              />
            </div>
            <button
              type="submit"
              id="enquiry-submit"
              style={{
                padding: '0.9rem', background: '#0a1f44', color: 'white',
                fontWeight: 700, borderRadius: '9999px', fontSize: '1rem',
                cursor: 'pointer', border: 'none', fontFamily: 'inherit',
                boxShadow: '0 8px 24px rgba(10,31,68,0.3)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.target.style.background = '#1e4fc7' }}
              onMouseLeave={e => { e.target.style.background = '#0a1f44' }}
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
