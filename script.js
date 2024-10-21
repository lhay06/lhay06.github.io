function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}

const url = 'https://compute.samford.edu/zohauth/clients/datajson/1';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#data-table tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><a href="details.html?id=${item.PitchNo}">Pitch ${item.PitchNo}</a></td>
                    <td>${item.Date}</td>
                    <td>${item.Time}</td>
                    <td>${item.Batter}</td>
                    <td>${item.Balls}</td>
                    <td>${item.Strikes}</td>
                    <td>${item.Outs}</td>
                    <td>${item.PitchCall}</td>
                    <td>${item.KorBB}</td>
                    <td>${item.RelSpeed}</td>
                    <td>${item.SpinRate}</td>
                    <td>${item.SpinAxis}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });