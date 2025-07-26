const fs = require("fs/promises");

module.exports = {
    data: {
        name: "fleshcousin",
        description: "Sends a random FleshCousin voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["fleshcousin"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:fleshcousin:1398787547563561021> ${voiceline.text}` });
      },
}