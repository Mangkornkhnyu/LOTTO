document.getElementById('lotteryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var form = e.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }
    
    var lotteryType = document.getElementById('lottery_type').value;
    var number2 = document.getElementById('number_2').value;
    var number3 = document.getElementById('number_3').value;
    var betTypes = [];
    var checkboxes = document.querySelectorAll('input[name="bet_type"]:checked');
    checkboxes.forEach((checkbox) => {
        betTypes.push(checkbox.value);
    });

    var number2List = number2.split(',').map(num => num.trim()).filter(num => num !== '');
    var number3List = number3.split(',').map(num => num.trim()).filter(num => num !== '');

    var details = `
        <p>ประเภทหวย: ${lotteryType}</p>
        <p>เลข 2 ตัว: ${number2List.join(', ')}</p>
        <p>เลข 3 ตัว: ${number3List.join(', ')}</p>
        <p>ประเภทการแทง: ${betTypes.join(', ')}</p>
    `;

    document.getElementById('lotteryDetails').innerHTML = details;

    // แสดงป็อปอัพ
    document.getElementById('overlay').classList.remove('d-none');
});

document.getElementById('downloadImage').addEventListener('click', function() {
    html2canvas(document.getElementById('popup')).then(function(canvas) {
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'lottery_details.png';
        link.click();
    });
});

function closePopup() {
    document.getElementById('overlay').classList.add('d-none');
}
