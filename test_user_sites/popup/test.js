document.addEventListener('DOMContentLoaded', function () {
  // Schedule adjusted as per requirements
  const schedule = [
    { time: '00:00', title: 'Overnights' }, // Midnight to 6am
    { time: '06:00', title: 'Breakfast' }, // 6am Breakfast
    { time: '12:00', title: 'Midday' }, // 12 midday
    { time: '18:00', title: 'Evenings' } // 6pm Evenings
    // The next day starts again with Overnights at midnight
  ];

  const container = document.getElementById('radioShowContainer');
  container.innerHTML = ''; // Clear existing content

  // Get current UK time
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })
  );
  const currentTime = now.getHours() * 100 + now.getMinutes();

  let currentShow = schedule.find((show, index, arr) => {
    // Calculate the end time of the current show
    const nextShowIndex = (index + 1) % arr.length;
    const nextShowTime = arr[nextShowIndex].time;
    const [nextHours, nextMinutes] = nextShowTime.split(':');
    const nextTime = parseInt(nextHours) * 100 + parseInt(nextMinutes);

    // Adjust for the show that spans midnight
    const showEndTime =
      nextTime > parseInt(show.time.replace(':', '')) ? nextTime : 2400;

    return (
      currentTime >= parseInt(show.time.replace(':', '')) &&
      currentTime < showEndTime
    );
  });

  // If it's past the last show's end time, it's the overnight slot
  if (!currentShow) {
    currentShow = schedule[0]; // Default to the first slot in case no current show is found, catering for overnight
  }

  // Create and append the current show element
  const element = document.createElement('div');
  element.textContent = `${currentShow.time} - ${currentShow.title}`;
  container.appendChild(element);
});
