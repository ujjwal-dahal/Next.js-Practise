//app/api/auth/[...nextauth]/route.ts 
//app -> bhitra api folder -> auth -> [...nextauth] -> route.ts

import { handlers } from "@/auth"; //import handlers from that auth file

export const { GET , POST } = handlers; //export GET and POST from that handlers

