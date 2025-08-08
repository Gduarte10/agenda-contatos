import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://nxjbkqiiacfhrmqwxajw.supabase.co';
const supabasekey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54amJrcWlpYWNmaHJtcXd4YWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNDI5ODgsImV4cCI6MjA2MzYxODk4OH0.eLQP78S8wpHaU_C526G2_q9h39kr3Z_EvTyA3gIGAkU';
export const supabase = createClient(supabaseUrl, supabasekey);