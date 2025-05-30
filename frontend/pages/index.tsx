// pages/index.tsx
import { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading…</p>;

  return (
    <div className="p-8">
      <h1>Home List</h1>

      {session ? (
        <>
          <p>🎉 You are logged in as <strong>{session.user?.name}</strong>!</p>
          <button onClick={() => signOut({ callbackUrl: '/login' })}>
            Sign out
          </button>
        </>
      ) : (
        <p>😢 You are <strong>not</strong> logged in.</p>
      )}
    </div>
  );
};

export default Home;
