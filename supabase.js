const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = String(process.env.SUPABASE_URL || "").trim();
const supabaseServiceRoleKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();

const supabaseConfigured = Boolean(supabaseUrl && supabaseServiceRoleKey);

const supabase = supabaseConfigured
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })
  : null;

module.exports = { supabase, supabaseConfigured };
