const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Nawab Majid47" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923024032847";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_05_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaNm9ta1lPdzI5TFFpRFlGZGFIOFlEdUh1cENMQWdKVXF0QllBUTZBd25rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA0OTkyMjYwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzRCRDI5MjkyQjBFMDQ1RDdFQjdFREQ2REYzNDk4QjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDY1NTM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5ZOFItYXJ6U0pPOVl6VE15RzJDWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjdhMjliNzQtNDE5ZC00ZjM0LTgwYWItNTNiMTczYzc5MTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDExMyxcbiAgICAgIDksXG4gICAgICAyMzIsXG4gICAgICA0OSxcbiAgICAgIDI0NyxcbiAgICAgIDI3LFxuICAgICAgMTY2LFxuICAgICAgNyxcbiAgICAgIDE2MixcbiAgICAgIDEwOCxcbiAgICAgIDEyNixcbiAgICAgIDE0OSxcbiAgICAgIDExMCxcbiAgICAgIDM1LFxuICAgICAgMTg2LFxuICAgICAgMjI4LFxuICAgICAgMTc3LFxuICAgICAgMTMwLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMjUxLFxuICAgICAgNDEsXG4gICAgICAxOTUsXG4gICAgICAyNixcbiAgICAgIDcxLFxuICAgICAgMjMwLFxuICAgICAgMjQ1LFxuICAgICAgMjA1LFxuICAgICAgMTUwLFxuICAgICAgMjA2LFxuICAgICAgNDksXG4gICAgICAxODYsXG4gICAgICA0OCxcbiAgICAgIDE1LFxuICAgICAgMjA0LFxuICAgICAgMjM3LFxuICAgICAgMjE0LFxuICAgICAgMTI3LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN05MSzkzU0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA0OTkyMjYwMzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTEyNDM2NzQyNjc4NDk6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRMmYdsmpya0gS8mpxYvKm1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01iS3JxTUJFUHJ3c0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTThoQ3daNjRLc1ROU3ZXY0NtL2VvcE1iT0V1UzZxb0RpalBLNThWTXhIYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpZStjb1Vja0VoWFdBaHptVVNhdzAvMXlrcURENWFOVjhLYXMvcUVzOUI3dEd2Zm1wTHo1dEQ1dTJqTnlsNS9rOWIzMDVSTXAwRXFIV1UvQURiWHZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIN2N6RHorNnJjTlVyMmV2VGdHSjRjUE5Sb0JtcmpKUTVoZVQwVXdDUDVKbzF3ZzlIMGZJc3VTWDZXZU5IdFVHcjhIMWFDYjZlM1pSaHFNRU5JVXJBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDk5MjI2MDM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjU1MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIeUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh5QS5qc29uIjogIntcImtleURhdGFcIjpcIjF4emFhV3Q0NXZlWXpLZE5QL2cxdVcrenZqNkxxRnh2Q09XZUZSbVZwMUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQyNTk4OTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMjUyMjE1OThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 Nawab Majid47 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
