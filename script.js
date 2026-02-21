let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let totalJobs = document.getElementById('total-jobs');
let interviewCount = document.getElementById('interview-count');
let rejectCount  = document.getElementById('reject-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');


let allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');



let jobCountNumber = allCardSection.children.length;

function calculateCount() {
    total.innerText = jobCountNumber;
    totalJobs.innerText = jobCountNumber;

    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}

calculateCount();


function toggleStyle(id) {
    allFilterBtn.classList.remove('btn-primary')
    interviewFilterBtn.classList.remove('btn-primary')
    rejectFilterBtn.classList.remove('btn-primary')

    allFilterBtn.classList.add('btn-soft', 'bg-gray-200', 'text-gray-500')
    interviewFilterBtn.classList.add('btn-soft', 'bg-gray-200', 'text-gray-500')
    rejectFilterBtn.classList.add('btn-soft', 'bg-gray-200', 'text-gray-500')

    const selected = document.getElementById(id);

    selected.classList.remove('btn-soft', 'bg-gray-200', 'text-gray-500');
    selected.classList.add('btn-primary');
    
}
