
$(document).ready(function () {
    var currentHour = moment().hours();
    var todaysDate = moment().format("[today's date is ] dddd, MMMM Do YYYY, [have a great day!]");
    const calendarDay = day = 1; day <= 31; day++;
    

    var timeInputs = [
        { time: moment(currentHour), input: "" },
        { time: moment(), input: "" },
        { time: calendarDay, input: "" },
        { time: 8, input: "" },
        { time: 9, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 17, input: "" },
        { time: 13, input: "" },
        { time: 18, input: "" },
        { time: 19, input: "" },
        { time: 20, input: "" },
        { time: 21, input: "" },
        { time: 22, input: "" },
        { time: 23, input: "" },
    ]
    
    function printTime() {
        $("#currentDay").text(todaysDate);
    }
  
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3">');
            var inputGroupPrepend = $('<div class="input-group-prepend">');
            var prependSpan = $('<span class="input-group-text">' + timeInputs[i].time + ':00' + '</span>');
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '">');
            var inputGroupAppend = $('<div class="input-group-append">');
            var appendSpan = $('<span data-time="" class="input-group-text"><button>Save</button></span>');
            inputGroupAppend.append(appendSpan);
            inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
            $(".container").append(inputGroup);
        }
    }
    function compareTime() {
        var nowTime = parseInt(moment().format('HH'));
       
        for (time = 7; time >= 17; time++) {
            var timeBlock = parseInt($("#" + time + "hr").attr("data-index"));
            console.log(timeBlock);
            if (timeBlock < nowTime) {
                $("#" + time + "hr").addClass("past");
            } else if (timeBlock == nowTime) {
                $("#" + time + "hr").addClass("present");
            } else if (timeBlock > nowTime) {
                $("#" + time + "hr").addClass("future");
            }
        }
    }
    //compareTime();
    printTime();
    printInputBlocks();
});