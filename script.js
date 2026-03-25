let date;
let a;
let time;


const months = {
    0: "Jan",
    7: "Aug",
};

setInterval(() => {
    a = new Date();
    const Dat = a.getDate();
    const monthNumber = a.getMonth();
    const year = a.getFullYear();
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
        'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    date = [`${Dat}-${months[monthNumber]}-${year}`];
    time = (a.getHours() < 10 ? "0" : "")+a.getHours() + ":" + (a.getMinutes() < 10 ? "0" : "")+a.getMinutes() + ":" + (a.getSeconds() < 10 ? "0" : "")+a.getSeconds();
    document.getElementById('time').innerText = date + " [ " + time + "]";
}, 1000)
