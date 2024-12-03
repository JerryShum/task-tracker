import { createClient } from "@supabase/supabase-js";

// Server-side environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
   throw new Error(
      "Missing SUPABASE_URL or SUPABASE_KEY environment variables"
   );
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
