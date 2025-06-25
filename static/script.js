
const users = [
    { name: "User1", likes: 1000 },
    { name: "User2", likes: 900 },
    { name: "User3", likes: 850 },
    { name: "User4", likes: 600 },
    { name: "User5", likes: 400 },
];

function shuffle() {
    // Simulação de subida de likes e reordenação
    users.forEach(u => u.likes += Math.floor(Math.random() * 20));
    users.sort((a, b) => b.likes - a.likes);
}

function render() {
    const container = document.getElementById("top-likes");
    container.innerHTML = "";
    users.slice(0, 5).forEach((user, i) => {
        const div = document.createElement("div");
        div.className = "user-entry";
        div.id = i === 0 ? "top1" : "";

        let medal = "";
        if (i === 0) medal = "🥇";
        if (i === 1) medal = "🥈";
        if (i === 2) medal = "🥉";

        div.innerHTML = \`
            <div class="medal">\${medal}</div>
            <div class="avatar">\${i === 0 ? '<img src="/static/crown.png" class="crowns">' : ''}</div>
            <span>\${user.name}</span>
            <div class="hearts">
                <img src="/static/heart.png">
                <img src="/static/heart.png">
                <img src="/static/heart.png">
            </div>
            <span style="margin-left: 6px;">\${user.likes}</span>
        \`;
        container.appendChild(div);
    });
}

setInterval(() => {
    shuffle();
    render();
}, 2000);

render();
