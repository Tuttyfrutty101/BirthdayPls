function getBirthdays() {
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const url = `http://localhost:3000/birthdays?month=${month}&day=${day}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const birthdays = document.getElementById("birthdays");

            // Clear any previous results
            birthdays.innerHTML = "";

            if (data.data.length === 0) {
                birthdays.innerHTML = "<li>No famous people were born on this day.</li>";
            } else {
                data.data.forEach(person => {
                    const name = person.name;
                    const description = person.description;

                    const li = document.createElement("li");
                    li.innerHTML = `<strong>${name}</strong>: ${description}`;
                    birthdays.appendChild(li);
                });
            }
        })
        .catch(error => {
            console.error(error);
        });
}
