function updateClock() {

  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth()+1;
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let week = now.getDay()
  // 補零
  year = String(year).padStart(4, '0');
  month = String(month).padStart(2, '0');
  day = String(day).padStart(2, '0');
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  
  //星期迴圈

  const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

  // 組合時間
  const timeString = `${year}.${month}.${day}.${days[week]}⏲︎${hours}:${minutes}:${seconds}`;

  // 顯示到 HTML
  document.getElementById("clock").innerHTML = timeString;
}


// 每秒更新
setInterval(updateClock, 1000);

// 頁面一開始先執行一次
updateClock();
