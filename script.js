var mark = () => {
  const date = new Date();
  let day = date.getDay();
  let hour = date.getHours();

  //to highlight whole day routine
  if (day == 0) {
  } else {
    var elem = document.querySelector(`tr:nth-child(${day + 1})`);
    elem.style.backgroundColor = "rgb(65, 67, 133)";
  }

  //to highlight current class

  let cell = hour - 9;

  let colspancount = 0;

  for (i = 0; i < cell && i < elem.childElementCount; i++) {
    if (elem.children[i].getAttribute("colspan") == 2) {
      colspancount++;
    }
  }

  let currCell = cell - colspancount + 1;

  if (colspancount == 2) {
    currCell += 1;
  }
  if (colspancount == 2 && hour == 15) {
    currCell -= 1;
  }

  if (day == 0) {
  } else {
    if (hour >= 10 && hour <= 15) {
      let elem2 = elem.querySelector(`td:nth-child(${currCell})`);
      if (elem2.innerHTML == "*") {
      } else {
        elem2.style.backgroundColor = "rgb(23, 105, 5)";
      }
    } else {
      console.log("wrong code");
    }
  }
};

const DynamicClock = () => {
  setInterval(() => {
    var date = new Date();
    var time = date.toLocaleTimeString("en-US");
    var today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    document.getElementById("clock").innerHTML = time;
    document.getElementById("calender").innerHTML = today;
  }, 1000);
};

const weekCalender = () => {
  const date = new Date();
  let day = date.getDay();

  const weekday = document.getElementById("weekDay");

  switch (day) {
    case 1:
      day = "It's Monday";
      break;
    case 2:
      day = "It's Tuesday";
      break;
    case 3:
      day = "It's Wednesday";
      break;
    case 4:
      day = "It's Thursday";
      break;
    case 5:
      day = "It's Friday";
      break;
    case 6:
      day = "It's Saturday";
      break;
    default:
      day = "It's Sunday";
  }

  weekday.innerHTML = day;
};
