var welcome = {
    type: 'html-keyboard-response',
    stimulus: 'Welcome to the UNTITLED experiment. Please press any key to continue.'
};

var instructions = {
    type: 'html-keyboard-response',
    stimulus: 'Here are the instructions. Please press any key to continue.'
};

var goodbye = {
    type: 'html-keyboard-response',
    stimulus: 'Thank you for participating. You may now close the page.'
};

function saveData(name, data) {
    jsPsych.data.addProperties({ subject: ID });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ filename: name, filedata: data }));
}