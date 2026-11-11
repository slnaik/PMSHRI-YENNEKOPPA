// Replace these two lines with your real keys from Supabase
const SUPABASE_URL = "https://supabase.co";
const SUPABASE_ANON_KEY = "your-actual-anon-public-key";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    errorMsg.innerText = "Checking credentials..."; 

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        errorMsg.innerText = "Invalid login: " + error.message;
    } else {
        // Sends the user to your main school website homepage
        window.location.href = "index.html"; 
    }
});
