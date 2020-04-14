export function formatDuration(duration_ms) {
    let duration, h, min, sec;
    duration = Number(duration_ms) / 1000;
    h = Math.floor(duration / 3600);
    min = Math.floor(duration % 3600 / 60);
    sec = (Math.floor(duration % 60 ));
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (h < 1) {
        return min + ':' + sec;
    }
    return h + ':' + min + ':' + sec
}
