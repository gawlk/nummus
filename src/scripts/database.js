import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tzwhgytacaavmmrmeqrn.supabase.co'
const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzQxNjM2OCwiZXhwIjoxOTI4OTkyMzY4fQ.BczIvrGbyxB1lC99mJrQcRfliFjEenrLzehuhajSJwo'

const database = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

console.log('database', database)

export default database
