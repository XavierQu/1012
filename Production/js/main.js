(() => {
    // variable stack first
    const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p');

    // wrire functions in the middle
    function setCourseInfo(data) {
        courseInfo[0].textContent = data.coursename;
        courseInfo[0].innerHTML += ` - <span class="text-primary">${data.courseInfo}</span>`;

        //add the prof name
        courseInfo[1].textContent = `Professor: ${data.profname}`;

        //add the pro image
        document,querySelectorAll('.profileImg')[1].src = `images/${data.profimg}`;

        //add the times
        data.classtime.forEach(time => {
            let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
            courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;

        })
    }

    // call the setCourseInfo funciton
    setCourseInfo(classData);
})();