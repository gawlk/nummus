import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://pzaijzoluzgydgdmiwip.supabase.co'
const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzIzOTQ5MywiZXhwIjoxOTI4ODE1NDkzfQ.549tJgdD-JuVmj1PgaPoQNktqlbUcc_wH7RBvvFnIRU'

const database = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

console.log('database', database)

export default database
