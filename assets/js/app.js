const ratio = .1
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

var handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            if(entry.target.classList.contains('bulleCompetences')){
                entry.target.classList.add('backgroudBulleCompetences')
            }
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

var observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})