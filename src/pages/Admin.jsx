import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useContent } from '@/lib/ContentContext';
import { getDefaultContent, saveSiteContent } from '@/lib/contentStore';

const sectionOrder = [
  'brand',
  'hero',
  'about',
  'services',
  'process',
  'timeline',
  'testimonials',
  'pricing',
  'contact',
  'faq',
  'footer',
];

const toJson = (value) => JSON.stringify(value, null, 2);

export default function Admin() {
  const { content, setContent, loading, reload } = useContent();
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [gateUnlocked, setGateUnlocked] = useState(false);
  const [drafts, setDrafts] = useState({});
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const adminPassphrase = import.meta.env.VITE_ADMIN_PASSPHRASE;

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });
    return () => sub?.subscription?.unsubscribe();
  }, []);

  useEffect(() => {
    if (content) {
      const next = {};
      for (const key of Object.keys(content)) {
        next[key] = toJson(content[key]);
      }
      setDrafts(next);
    }
  }, [content]);

  useEffect(() => {
    if (!adminPassphrase) {
      setGateUnlocked(true);
      return;
    }
    const stored = localStorage.getItem('asiss_admin_gate');
    if (stored === 'true') {
      setGateUnlocked(true);
    }
  }, [adminPassphrase]);

  const orderedKeys = useMemo(() => {
    const keys = Object.keys(content || {});
    return [...new Set([...sectionOrder, ...keys])].filter(Boolean);
  }, [content]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const { error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (err) setError(err.message);
  };

  const handleGate = (e) => {
    e.preventDefault();
    setError('');
    if (!adminPassphrase) {
      setGateUnlocked(true);
      return;
    }
    if (passphrase === adminPassphrase) {
      localStorage.setItem('asiss_admin_gate', 'true');
      setGateUnlocked(true);
      setPassphrase('');
    } else {
      setError('Invalid passphrase.');
    }
  };

  const handleSave = async () => {
    setError('');
    setStatus('Saving...');
    try {
      const nextContent = {};
      for (const key of orderedKeys) {
        if (!drafts[key]) continue;
        nextContent[key] = JSON.parse(drafts[key]);
      }
      await saveSiteContent(nextContent);
      setContent(nextContent);
      setStatus('Saved');
      setTimeout(() => setStatus(''), 1500);
    } catch (err) {
      setStatus('');
      setError(err.message || 'Invalid JSON in one of the sections.');
    }
  };

  const handleReset = () => {
    const defaults = getDefaultContent();
    const next = {};
    for (const key of Object.keys(defaults)) {
      next[key] = toJson(defaults[key]);
    }
    setDrafts(next);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!gateUnlocked) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <form onSubmit={handleGate} className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h1 className="text-xl font-bold text-slate-900 mb-2">Admin Access</h1>
          <p className="text-sm text-slate-500 mb-6">Enter the passphrase to continue.</p>
          <label className="block text-sm font-medium text-slate-700 mb-1">Passphrase</label>
          <input
            type="password"
            className="w-full mb-4 rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            required
          />
          {error ? <div className="text-sm text-red-600 mb-3">{error}</div> : null}
          <button className="w-full rounded-lg bg-slate-900 text-white text-sm font-semibold py-2.5">
            Continue
          </button>
        </form>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h1 className="text-xl font-bold text-slate-900 mb-2">Admin Login</h1>
          <p className="text-sm text-slate-500 mb-6">Sign in with your Supabase account.</p>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full mb-4 rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full mb-4 rounded-lg border border-slate-200 px-3 py-2 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error ? <div className="text-sm text-red-600 mb-3">{error}</div> : null}
          <button className="w-full rounded-lg bg-slate-900 text-white text-sm font-semibold py-2.5">
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Asiss CMS</h1>
            <p className="text-xs text-slate-400">Edit all site content</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-sm px-3 py-2 rounded-lg border border-slate-200 text-slate-600"
            >
              Reset to Defaults
            </button>
            <button
              onClick={handleSave}
              className="text-sm px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold"
            >
              Save All
            </button>
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-2 rounded-lg border border-slate-200 text-slate-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {loading ? <div className="text-sm text-slate-500">Loading content...</div> : null}
        {status ? <div className="text-sm text-emerald-600 mb-3">{status}</div> : null}
        {error ? <div className="text-sm text-red-600 mb-3">{error}</div> : null}

        <div className="space-y-6">
          {orderedKeys.map((key) => (
            <div key={key} className="border border-slate-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">{key}</h2>
                <button
                  className="text-xs text-slate-400 underline"
                  onClick={() => {
                    setDrafts((prev) => ({ ...prev, [key]: toJson(content[key]) }));
                  }}
                >
                  Revert Section
                </button>
              </div>
              <textarea
                value={drafts[key] || ''}
                onChange={(e) => setDrafts((prev) => ({ ...prev, [key]: e.target.value }))}
                className="w-full min-h-[220px] font-mono text-xs rounded-xl border border-slate-200 p-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
