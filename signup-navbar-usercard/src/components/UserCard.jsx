export default function UserCard({ name, email }) {
  return (
    <div className="card" role="region" aria-label={`${name} user card`}>
      <h3>{name}</h3>
      <p className="subtle">{email}</p>
    </div>
  )
}
