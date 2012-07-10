Guasa
=====

JavaScript WhatsApp client using [WhatsAPI](https://github.com/aesedepece/WhatsAPI).

## Setting up

 1. Clone or download a copy of aesedepece's [WhatsAPI](https://github.com/aesedepece/WhatsAPI) fork.
 2. Put it somewhere in a web server capable of running PHP. This doesn't need to be a public server, a localhost Apache or IIS works fine.
 3. Clone or download a copy of [Guasa](https://github.com/aesedepece/Guasa).
 5. (If you put Guasa in the web server) access with your favourite browser (not MSIE, please) to the proper URL, i.e.: `http://localhost/Guasa/index.htm` or `http://example.com/Guasa/index.htm`.
 6. (If you put Guasa wherever in a PC) just open `index.htm` with Mozilla Firefox (most browsers don't allow some HTML5 features to be runned locally but FF does).
 7. Fill in the login form. "WhatsAPI URL" is the URL for WhatsAPI server, i.e.: `http://localhost/WhatsAPI/server.php` or `http://example.com/WhatsAPI/server.php`. "IMEI" is the actual IMEI belonging to the phone you registered your WA account with.
 8. That's all. Enjoy!

## Warnings
 
 * The device hosting WhatsAPI needs to be in a network where traffic through port 5222 is allowed. You can check if you can reach WhatsApp servers by executing `telnet c.whatsapp.net 5222` in bash or cmd.
 * The protocol used by WhatsApp is quite unsafe (both Guasa and official client). We discourage the use of this app for talking about sensitive subjects or "gunpowder plots".

## Credits
Thanks to everyone who is helping to debug, proposing features and pushing code.
As of July 10th, this software contains code from following good-looking people:
 * [@aesedepece](https://github.com/aesedepece)
 * [@satup](https://github.com/satup)

## License 

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You can get a copy of the GNU General Public License in:
http://www.gnu.org/licenses/gpl-2.0.html