
function GoalsPage() {
  return (
    <div>
      <h1>Goals</h1>
      <p>Welcome to SustainChallenge</p>
      <button onClick={getKpis}>get shit</button>
    </div>
  );
}


async function getKpis() {
  try {
    const response = await fetch('http://localhost:3000/kpis');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


export default GoalsPage;