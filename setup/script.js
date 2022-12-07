const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', showSide);
// function showSide() {
//    if (sidebar.classList.contains('show-sidebar')) {
//     sidebar.classList.remove('show-sidebar');
//    } else {
//     sidebar.classList.add('show-sidebar');
//    }
// }

function showSide() {
    sidebar.classList.toggle('show-sidebar');
}

closeBtn.addEventListener('click', closeSide);
function closeSide() {
    sidebar.classList.remove('show-sidebar');
}