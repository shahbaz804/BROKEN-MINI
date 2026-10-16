// broken.js — Command Registry
const commands = [];

function cmd(info, func) {
    const data = { ...info };
    data.function = func;
    commands.push(data);
    return data;
}

module.exports = { cmd, commands };
