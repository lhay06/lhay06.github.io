function filterData(event) {
  event.preventDefault(); // Prevent form submission if this is part of a form
  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  
  // Select all rows in the table body
  var rows = document.querySelectorAll('#data-table tbody tr');

  rows.forEach(row => {
      // Get the date from the current row (assuming it's in the second column)
      var rowDate = new Date(row.cells[1].innerText); // Adjust index if necessary

      // Check if the row date is within the specified range
      if (rowDate >= startdate && rowDate <= enddate) {
          row.style.display = ''; // Show the row
      } else {
          row.style.display = 'none'; // Hide the row
      }
  });
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