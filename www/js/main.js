// SIDEBAR SCRIPT
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

// PESONAL SWITCHING

function swap2(x)
{
    const tvContent = document.getElementById("tv");
    const soundbarContent = document.getElementById("soundbar");

    if(x == 1)
    {
        tvContent.classList.remove("hidden");
        soundbarContent.classList.add("hidden");
    }
    else if(x == 2)
    {
        tvContent.classList.add("hidden");
        soundbarContent.classList.remove("hidden");
    }
}
