/*                                                       
TODO--                                                      
TODO--   -+=:.                               :-=:           
TODO--   :%%%#=-.                        .=+%%%%:           
TODO--    -%%=::==.                   .=+=::%%#:            
TODO--     -%=::::=+.               .=+::::-%*.             
TODO--      :+-:::::+=   .:---:.   =+::::::+-               
TODO--        =+:::::-+==--:::-===+-::::-+=.                
TODO--         .=+=:::::::::::::::::::=+=.         .:       
TODO--            :*-:::::::::::::::=+:       .-===-==      
TODO--             *::::::::::::--:::+    .-===-:::::=-     
TODO--            .*:+*:=::::::=-*#::* :===-::::::::::+:    
TODO--            .+:+%%=::::::-*#=::*+-:::::::::::::::*.   
TODO--            -=-::::--=+=-:::-=--::--::::::::::::::+   
TODO--            *+++-::=#**#+::-++++-:::--::::::::::::=-  
TODO--            =*++-:::+==+-:::=+=-::::----------::---*  
TODO--             =*:::::-===::::--::::::--==++++===--:..  
TODO--              :*-:::::-::::-:::::::*=-:.              
TODO--              +::::::::::::::::::--=+                 
TODO--             :+:::::::::::::::::==--+=                
TODO--             =-::::-::::::::::-**=---+-               
TODO--             +:::::-:::::::::--=--=++=-               
TODO--          :..*-::::-:::::::::::=-#-.                  
TODO--         :*++:-::::-:::::::::::=***.                  
TODO--         :*--::::::-:::::--==-:-*##-                  
TODO--          *---:---::::::::---:::*:                    
TODO--          -+--:::----::::=---:::+                     
TODO--           +=-----------=--=-::+:                     
TODO--            =++=======++=-=-=++:                      
TODO--                       .++=-:.    */     
//!	.o88o.                               o8o                .
//!	888 `"                               `"'              .o8
//!	o888oo   .oooo.o  .ooooo.   .ooooo.  oooo   .ooooo.  .o888oo oooo    ooo
//!	888    d88(  "8 d88' `88b d88' `"Y8 `888  d88' `88b   888    `88.  .8'
//!	888    `"Y88b.  888   888 888        888  888ooo888   888     `88..8'
//!	888    o.  )88b 888   888 888   .o8  888  888    .o   888 .    `888'
//!	o888o   8""888P' `Y8bod8P' `Y8bod8P' o888o `Y8bod8P'   "888"     d8'
//!															   ..P'
															
const server = require('./src/app.js');
const { conn, Type } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
	let info = await axios.get('https://pokeapi.co/api/v2/type');
	info = info.data.results.map((p) => ({
		name: p.name,
	}));

	let prom = info.map((type) =>
		Type.findOrCreate({
			where: { name: type.name },
		})
	);

	Promise.all(prom).then((resp) => {
		console.log('Tipos Cargados...');
	});

	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
