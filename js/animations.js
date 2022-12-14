export function gradualYScroll(element, speed) {
    const maxscroll = element.offset().top;
    const finalSpeed = maxscroll * speed;
    element.animate({
        scrollTop: maxscroll,
    }, finalSpeed, "linear");
}

export function resetScroll(element) {
    element.stop(true);
    element.scrollTop(0)
}