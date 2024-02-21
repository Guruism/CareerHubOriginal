let i=0;
const li=[
    'images/bank-icon-logo-vector-260nw-399995245.jpg',
    'images/become-professional-wildlife-photographer-1200x675-cropped.jpg',
    'images/cartoon-illustration-depicting-smiling-doctors-600nw-2267566339.jpg',
    'images/home-hero.jpg',
    'images/png-transparent-graduation-ceremony-graduate-university-academic-degree-student-master-s-degree-student-thumbnail.png',
    'images/stair-stock-market-business-logo-icon-design-vector-22926779.jpg',
    'images/1-im5SQpHmbnv82Bp5oBbhA.png',
    'images/UI-UX.jpg'
];
const user='images/download-removebg-preview (2).png';

let cmt=document.querySelectorAll('.rbox');
let img=document.querySelectorAll('.subbox'); 
let logoutButtons = document.querySelectorAll('.logout');
let srhbtn=document.querySelectorAll('.hire-btn');

srhbtn.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "JobPortal.html";
    });
});
logoutButtons.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
cmt.forEach(item => {
    item.querySelector('img').setAttribute('src',user);
});
img.forEach(e=>{
    e.style.backgroundImage=`url(${li[i]})`;
    i++;
});
