// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uoomesrpcvjbsbmpeqjn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvb21lc3JwY3ZqYnNibXBlcWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MDQ4MzksImV4cCI6MjA2NzM4MDgzOX0.A3TPISfKwa72mlidqkCzaLwBXR1y__l13dyzq-jNlSs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});