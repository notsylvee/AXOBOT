const fs = require("fs/promises");

module.exports = {
    data: {
        name: "unpleasent",
        description: "Sends a random Unpleasent voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["unpleasent"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:unpleasent:1398787727033368718> ${voiceline.text}` });
      },
}