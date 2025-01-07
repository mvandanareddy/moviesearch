import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fdduxyqplzidkkglgbwb.supabase.co';  // Found in your Supabase dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZHV4eXFwbHppZGtrZ2xnYndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDI0MjQsImV4cCI6MjA1MTcxODQyNH0.vHBM4dV9J3uo6GO-UMoyoUgXLwvrC7l41MxTyFZ0pjo';  // Found in your Supabase dashboard

export const supabase = createClient(supabaseUrl, supabaseKey);
