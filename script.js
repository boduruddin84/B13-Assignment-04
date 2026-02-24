let interviewList = [];
let rejectList = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let totalJobs = document.getElementById("total-jobs");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("reject-count");
let noJobs = document.getElementById("no-jobs");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("reject-filter-btn");

let allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");

const filterSection = document.getElementById("filtered-section");


let jobCountNumber = allCardSection.children.length;

function calculateCount() {
  total.innerText = jobCountNumber;
  totalJobs.innerText = jobCountNumber;

  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectList.length;
}

calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-primary");
  interviewFilterBtn.classList.remove("btn-primary");
  rejectFilterBtn.classList.remove("btn-primary");

  allFilterBtn.classList.add("btn-soft", "bg-gray-200", "text-gray-500");
  interviewFilterBtn.classList.add("btn-soft", "bg-gray-200", "text-gray-500");
  rejectFilterBtn.classList.add("btn-soft", "bg-gray-200", "text-gray-500");

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("btn-soft", "bg-gray-200", "text-gray-500");
  selected.classList.add("btn-primary");

  if(id == 'interview-filter-btn') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
  }
  else if(id == 'all-filter-btn') {
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
  else if(id == 'reject-filter-btn') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
  }
  else if(id == 'all-filter-btn') {
  allCardSection.classList.remove('hidden');
  filterSection.classList.add('hidden');
  noJobs.classList.add('hidden');
  }

}


mainContainer.addEventListener("click", function (event) {
    
  if (event.target.classList.contains("job-interview")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobPost = parentNode.querySelector(".job-post").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const applicationStatus = parentNode.querySelector(
      ".application-status",
    ).innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

    parentNode.querySelector(
      ".application-status",
    ).innerText = 'interview'

    const cardInfo = {
      jobName,
      jobPost,
      jobType,
      applicationStatus: 'interview',
      jobDescription
    };

    const jobNameExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName
    );


    if (!jobNameExist) {
      interviewList.push(cardInfo);
    }

    rejectList = rejectList.filter(item => item.jobName != cardInfo.jobName)

    if(currentStatus == "reject-filter-btn") {
      renderRejected();
    }


    calculateCount();

  }

  else if (event.target.classList.contains("job-rejected")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobPost = parentNode.querySelector(".job-post").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText; 
    const applicationStatus = parentNode.querySelector(
      ".application-status",
    ).innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;
    parentNode.querySelector(
      ".application-status",
    ).innerText = 'rejected'

    const cardInfo = {
      jobName,
      jobPost,
      jobType,
      applicationStatus: 'rejected',
      jobDescription
      
    };

    const jobNameExist = rejectList.find(
      (item) => item.jobName == cardInfo.jobName,
    );


    if (!jobNameExist) {
      rejectList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)

    if(currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    calculateCount();  
    
  }

  else if (event.target.closest(".job-deleted")) {

  const Card = event.target.closest(".card");
  const jobName = Card.querySelector(".job-name").innerText;

  
  interviewList = interviewList.filter(item => item.jobName != jobName);

  
  rejectList = rejectList.filter(item => item.jobName != jobName);

 
  if (allCardSection.contains(Card)) {
    jobCountNumber--;
  }

  Card.remove();

  calculateCount();

  
  if (currentStatus == "interview-filter-btn") {
    renderInterview();
  } 
  else if (currentStatus == "reject-filter-btn") {
    renderRejected();
  }
}
});

function renderInterview() {
  filterSection.innerHTML = "";

  if (interviewList.length == 0) {
    noJobs.classList.remove('hidden');
    filterSection.classList.add('hidden');
    return;
  } else {
    noJobs.classList.add('hidden');
    filterSection.classList.remove('hidden');
  }

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "card bg-[#FFFFFF] rounded-[8px]";
    div.innerHTML = `
        <div>
                    <div class="flex justify-between px-6 pt-6 pb-5">
                        <div>
                            <h3 class="job-name text-2xl font-bold text-black">${interview.jobName}</h3>
                            <p class="job-post  text-gray-500">${interview.jobPost}</p>
                        </div>
                        <button class="job-deleted btn btn-soft"><img src="./assets/Group 1.png" alt=""></button>
                    </div>

                    <p class="job-type text-gray-500 pb-5 px-6">${interview.jobType}</p>
                    <button class="application-status btn btn-soft text-xl uppercase text-black  bg-[#EEF4FF] mx-6">${interview.applicationStatus}</button>
                    <p class="job-description pt-2 pb-5 text-gray-500 px-6">${interview.jobDescription}</p>
                    <div class="px-6 pb-6">
                        <button class="job-interview btn btn-soft border-green-500 text-green-500">interview</button>
                        <button class="job-rejected btn btn-soft border-red-500 text-red-500">Rejected</button>
                    </div>
                </div>
                <div>

                </div>
        `;

        filterSection.appendChild(div);
  }
}

function renderRejected() {
  filterSection.innerHTML = "";

   if (rejectList.length == 0) {
    noJobs.classList.remove('hidden');
    filterSection.classList.add('hidden');
    return;
  } else {
    noJobs.classList.add('hidden');
    filterSection.classList.remove('hidden');
  }

  for (let reject of rejectList) {
    let div = document.createElement("div");
    div.className = "card bg-[#FFFFFF] rounded-[8px]";
    div.innerHTML = `
        <div>
                    <div class="flex justify-between px-6 pt-6 pb-5">
                        <div>
                            <h3 class="job-name text-2xl font-bold text-black">${reject.jobName}</h3>
                            <p class="job-post  text-gray-500">${reject.jobPost}</p>
                        </div>
                        <button class="job-deleted btn btn-soft"><img src="./assets/Group 1.png" alt=""></button>
                    </div>

                    <p class="job-type text-gray-500 pb-5 px-6">${reject.jobType}</p>
                    <button class="application-status btn btn-soft text-xl uppercase text-black  bg-[#EEF4FF] mx-6">${reject.applicationStatus}</button>
                    <p class="job-description pt-2 pb-5 text-gray-500 px-6">${reject.jobDescription}</p>
                    <div class="px-6 pb-6">
                        <button class="job-interview btn btn-soft border-green-500 text-green-500">interview</button>
                        <button class="job-rejected btn btn-soft border-red-500 text-red-500">Rejected</button>
                    </div>
                </div>
                <div>

                </div>
        `;

        filterSection.appendChild(div);
  }
}







