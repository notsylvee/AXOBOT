const fs = require("fs/promises");

module.exports = {
    data: {
        name: "gnarpy",
        description: "Sends a random Gnarpy voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["gnarpy"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:gnarpy:1398787557717708881> ${voiceline.text}` });
      },
}