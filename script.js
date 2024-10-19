document.getElementById('openEnvelopeBtn').addEventListener('click', function() {
    document.querySelector('.envelope').classList.add('open');
});

document.getElementById('closeEnvelopeBtn').addEventListener('click', function() {
    document.querySelector('.envelope').classList.remove('open');
});
