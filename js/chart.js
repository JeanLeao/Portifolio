const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['JAVA', 'JAVA-SCRIPT', 'SOCKET.IO', 'MONGODB', 'EXPRESS', 'NODE', 'REACT / REACT-NATIVE', 'FLUTTER'],
        datasets: [{
            data: [70, 60, 40, 70, 90, 60, 70, 50],
            
            backgroundColor: [
              '#101111d0',
                '#101111d0',
                '#101111d0',
                '#101111d0',
                '#101111d0',
                '#101111d0'

            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            hoverBackgroundColor: "#08744b79",
            borderWidth: 1,
            offset: 25,
            
        }]
    },
    options: {
        onHover: (event, chartElement) =>{


          if (chartElement.length == 1){
            if (chartElement[0].index == 0){
              document.getElementById("skill-java").style.visibility = "visible";
            document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 1){
              document.getElementById("skill-js").style.visibility = "visible";
              document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 2){
              document.getElementById("skill-wordpress").style.visibility = "visible";
              document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 3){
              document.getElementById("skill-css").style.visibility = "visible";
              document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 4){
              document.getElementById("skill-html").style.visibility = "visible";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 5){
              document.getElementById("skill-node").style.visibility = "visible";
              document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 6){
              document.getElementById("skill-reactnative").style.visibility = "visible";
              document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-flutter").style.visibility = "hidden";
            }
            if (chartElement[0].index == 7){
              document.getElementById("skill-html").style.visibility = "hidden";
            document.getElementById("skill-css").style.visibility = "hidden";
            document.getElementById("skill-js").style.visibility = "hidden";
            document.getElementById("skill-java").style.visibility = "hidden";
            document.getElementById("skill-wordpress").style.visibility = "hidden";
            document.getElementById("skill-node").style.visibility = "hidden";
            document.getElementById("skill-reactnative").style.visibility = "hidden";
              document.getElementById("skill-flutter").style.visibility = "visible";
            }

          }

        },


      plugins: {
            legend: {
                display: false,
            },
            
            tooltip: {
              callbacks: {
                label: function(context) {
                  return ''
                },
                title: function(ctx){
                  return (`${ctx[0].label}`);                  
                },


                
              },
              backgroundColor: 'rgba(255, 159, 64, 0)',
              titleFont: {
                size: 20

              },

            }
            
          }

    }
});


   