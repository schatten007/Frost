
export const resizeImg = (url) => {
    if (url == null) return;
    if (url.includes("media/screenshots")) {
        return url.replace("media/screenshots", "media/resize/640/-/screenshots")
    }
    return url.replace("media/games", "media/resize/640/-/games");
}