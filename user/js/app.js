$(document).ready(function () {


    $(".caesarCipher").validate({

        rules: {
            text: {
                required: true
            },
            shift: {
                required: true,
                range: [1, 27],
                digits: true
            }
        },

        messages: {
            text: {
                required: "Это поле обязательно для заполнения",

            },
            shift: {
                required: "Это поле обязательно для заполнения",
                renge: "Введите значение от 1 до 27",
                digits: "Допустимы только цифры"
            }
        }

    });

    $('#encrypt').click(function (e) {
        e.preventDefault();
        var text = $("#text").val();
        var rotate = $("#rotate").val();

        $.ajax({
            url: "http://my-phone-book.esy.es/light-it/server/Caesar_cipher.php",
            method: "POST",
            data: {
                type: 'encrypt',
                text: text,
                rotate: rotate
            },
            success: function (data) {
                var data_json = JSON.parse(data);
                $('#return-text').val(data_json.data);
            }
        })
    });

    $('#decrypt').click(function (e) {
        e.preventDefault();
        var text = $("#text").val();
        var rotate = $("#rotate").val();

        $.ajax({
            url: "http://my-phone-book.esy.es/light-it/server/Caesar_cipher.php",
            method: "POST",
            data: {
                type: 'decrypt',
                text: text,
                rotate: rotate
            },
            success: function (data) {
                var data_json = JSON.parse(data);
                $('#return-text').val(data_json.data);
            }
        })
    });

    $('#text').keyup(function () {
        var text = $("#text").val();
        text = text.toUpperCase();
        var result = {"A":0, "B":0, "C":0, "D":0, "E":0, "F":0, "G":0, "H":0, "I":0, "J":0, "K":0, "L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0};
        for (var i = 0; i < text.length; i++) {
            var c = text[i];
            result[c] = result[c] ? result[c] + 1 : 1;
        }
        var income = document.getElementById("income").getContext("2d");
        var myChart = new Chart(income, {
            type: 'bar',
            data: {
                labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S","T","U", "V", "W", "X", "Y", "Z", "Z"],
                datasets: [{
                    label: 'The frequency of occurrence of the letter in the string',
                    data: [result["A"],result["B"], result["C"], result["D"], result["E"], result["F"], result["G"], result["H"],result["I"], result["J"], result["K"], result["L"], result["M"], result["N"], result["O"], result["P"], result["Q"],result["R"],result["S"],result["T"],result["U"], result["V"], result["W"], result["X"], result["Y"], result["Z"], result["Z"]],
                    backgroundColor: [

                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 159, 64, 0.7)'

                    ],
                    borderColor
                        :
                        [
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)'
                        ],
                    borderWidth
                        :
                        1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });
});
