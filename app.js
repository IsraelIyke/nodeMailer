const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idndjbWFudW9iYXB0aWZla2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIxNTc5NTgsImV4cCI6MTk3NzczMzk1OH0.s5dUaHo9ASAWWgmX3sSV_XKuCFNd_v7Nc5-wRjziKXo";

const url = "https://nbvwcmanuobaptifekla.supabase.co";

const database = supabase.createClient(url, key);

async function fetching() {
  await fetch("http://localhost:3000/results/")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

fetching();
