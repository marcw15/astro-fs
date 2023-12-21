import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'
const supabaseUrl = 'https://amqchbbfiaexlbeopkbf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY_ANON;

export const supabase: any = createClient(supabaseUrl, supabaseKey);
(supabase as any).realtime.decode = function () {};
console.log(supabase.auth.signIn);
