var header = document.querySelector('#header')
var navigationHeader = document.querySelector('#navigation-header')
var showSidebar = false

function toggleSidebar () {
    showSidebar = !showSidebar

    if (showSidebar) {
        navigationHeader.style.marginRight = '0vw'
        navigationHeader.style.animationName = 'showSidebar'
    }

    else {
        navigationHeader.style.marginRight = '100vw'
        navigationHeader.style.animationName = '0'
    }
}

function closeSidebar () {
    if (showSidebar) {
        toggleSidebar ()
    }
}