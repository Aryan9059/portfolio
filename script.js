document.getElementById('resumedownload').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = './assets/Aryan_Srivastava_Resume.pdf';
    link.download = 'Aryan_Srivastava_Resume.pdf';
    link.click();
});

