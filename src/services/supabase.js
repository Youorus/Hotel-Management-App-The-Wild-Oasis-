import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vchehjbqhronrnlmyfry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjaGVoamJxaHJvbnJubG15ZnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1ODY5NjcsImV4cCI6MjA0NjE2Mjk2N30.rq62oqkqtCZr1LK061yg1-MySKHPgvSPwjwOPCOWyWI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
