const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() 
{
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() 
{
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

const tvContent = document.getElementById("tv");
const laptopContent = document.getElementById("laptop");
const mdaContent = document.getElementById("mda");
const mobileContent = document.getElementById("mobile");

function swap(x)
{
    if(x == 1)
    {
        tvContent.classList.remove("hidden");
        laptopContent.classList.add("hidden");
        mdaContent.classList.add("hidden");
        mobileContent.classList.add("hidden");
    }
    else if(x == 2)
    {
        tvContent.classList.add("hidden");
        laptopContent.classList.remove("hidden");
        mdaContent.classList.add("hidden");
        mobileContent.classList.add("hidden");
    }
    else if(x == 4)
    {
        tvContent.classList.add("hidden");
        laptopContent.classList.add("hidden");
        mdaContent.classList.add("hidden");
        mobileContent.classList.remove("hidden");
    }
}