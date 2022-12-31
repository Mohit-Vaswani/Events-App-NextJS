import {useRouter} from 'next/router';

export default function EventPage() {
  const router = useRouter();
  return (
    <div>
      <h1>My Events</h1>
      <p>{router.query.slug}</p>
      <button onClick={()=>router.push('/')}>Click</button>
    </div>

  )
}
