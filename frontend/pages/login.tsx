// pages/login.tsx
import { signIn, getCsrfToken } from 'next-auth/react';
import { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

interface LoginProps {
  csrfToken: string;
}

const Login: NextPage<LoginProps> = ({ csrfToken }) => {
  const [username, setUsername]   = useState('');
  const [password, setPassword]   = useState('');
  const [error, setError]         = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const res = await signIn('credentials', {
      redirect: false,     // stay on this page so we can handle errors
      username,
      password,
    });

    if (res?.error) {
      // bad creds: clear the fields and show an error
      setUsername('');
      setPassword('');
      setError('Invalid username or password');
    } else {
      // success: navigate to home
      window.location.href = '/';
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto', padding: 20 }}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

      <div style={{ marginBottom: 12 }}>
        <label>
          Username
          <input
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>
      </div>

      <button type="submit" style={{ width: '100%' }}>
        Sign In
      </button>

      {error && (
        <p style={{ color: 'red', marginTop: 12 }}>
          {error}
        </p>
      )}
    </form>
  );
};

export const getServerSideProps: GetServerSideProps<LoginProps> = async (context) => ({
  props: { csrfToken: (await getCsrfToken(context)) ?? '' },
});

export default Login;
