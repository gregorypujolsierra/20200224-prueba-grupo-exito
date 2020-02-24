export function formatDuration(duration_ms) {
    let duration, min, sec;
    duration = Number(duration_ms);
    min = Math.floor(duration / (60 * 1000));
    sec = (Math.floor(duration % (60 * 1000) / 1000));
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    return min + ':' + sec
}