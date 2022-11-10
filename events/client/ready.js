module.exports = {
    name: 'ready',
    once: true,

    /**
     * @param {Client} client 
     */
    async execute(client) {
        
        
        client.user.setActivity(".yardım ", {
            type: "WATCHING",
            name: "Râven"
        });
        
        
        console.log(`[LOG] ${client.user.tag} Aktif!`);
    }
}