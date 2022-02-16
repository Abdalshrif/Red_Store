//  js for countTime

    let countDownDate = new Date("May 14, 2022 00:00:00").getTime();
    // console.log(countDownDate);
    
    let counter = setInterval(() => {
        //Get Date Now
      let dateNow = new Date().getTime();

      //Fine The Date Difference Between Now And Countdown Date
      let dateDiffernt = countDownDate - dateNow;

      //Get Time Units
      let days = Math.floor(dateDiffernt / (1000 * 60 * 60 * 24));
      let hours = Math.floor((dateDiffernt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((dateDiffernt % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dateDiffernt % (1000 * 60)) / 1000);
      

      document.querySelector(".days").innerHTML = days;
      document.querySelector(".hours").innerHTML = hours;
      document.querySelector(".minutes").innerHTML = minutes;
      document.querySelector(".seconds").innerHTML = seconds;

      if (dateDiffernt < 0){
          clearInterval()
      }

    }, 1000);

// End js for countTime


