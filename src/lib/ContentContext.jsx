import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchSiteContent, getDefaultContent } from '@/lib/contentStore';

const ContentContext = createContext({
  content: getDefaultContent(),
  setContent: () => {},
  loading: true,
  reload: async () => {},
});

const isPlainObject = (value) =>
  value && typeof value === 'object' && !Array.isArray(value);

const mergeDeep = (base, override) => {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }
  if (!isPlainObject(base)) {
    return override !== undefined ? override : base;
  }

  const out = { ...base };
  const keys = Object.keys(override || {});
  for (const key of keys) {
    out[key] = mergeDeep(base[key], override[key]);
  }
  return out;
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(getDefaultContent());
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await fetchSiteContent();
    setContent(mergeDeep(getDefaultContent(), data));
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const value = useMemo(
    () => ({ content, setContent, loading, reload: load }),
    [content, loading]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => useContext(ContentContext);
