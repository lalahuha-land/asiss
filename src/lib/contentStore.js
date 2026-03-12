import { supabase } from '@/lib/supabaseClient';
import { defaultContent } from '@/content/defaultContent';

const TABLE = 'site_content';
const SITE_KEY = 'default';

export function getDefaultContent() {
  return JSON.parse(JSON.stringify(defaultContent));
}

export async function fetchSiteContent() {
  if (!supabase) return getDefaultContent();
  const { data, error } = await supabase
    .from(TABLE)
    .select('content')
    .eq('site_key', SITE_KEY)
    .single();

  if (error) {
    return getDefaultContent();
  }

  return data?.content ?? getDefaultContent();
}

export async function saveSiteContent(content) {
  const payload = {
    site_key: SITE_KEY,
    content,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from(TABLE)
    .upsert(payload, { onConflict: 'site_key' });

  if (error) {
    throw error;
  }
}
