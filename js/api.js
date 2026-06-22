export async function load() {
    const files = await fetch("./songs/index.json").then(r => r.json());

    const songs = await Promise.all(
        files.map(async file => {
            const res = await fetch(`./songs/${file}`);
            return await res.json();
        })
    );
    
    return songs;
}