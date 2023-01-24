/**
 * Just replace BAREUR
 */ 
const BAREURL = 'https://hide.atrirobots.top'

/**
 * Non-developers, please modify without authorization, 98% report errors!
*/
self.__uv$config = {
    prefix: `/server/`,
    bare: `${BAREURL}/https://hide.atrirobots.top/`,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/server/server.handler.js',
    client: '/server/server.client.js',
    bundle: '/server/server.bundle.js',
    config: '/server/server.config.js',
    sw: '/server/server.sw.js',
};
