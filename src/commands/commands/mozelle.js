const fs = require("fs/promises");

module.exports = {
    data: {
        name: "mozelle",
        description: "Sends a random Mozelle voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["mozelle"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:mozelle:1398787621408477305> ${voiceline.text}` });
      },
}