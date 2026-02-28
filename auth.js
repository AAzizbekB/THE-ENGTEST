alert("auth.js loaded ✅");
// ====== PUT YOUR SUPABASE KEYS HERE ======
const SUPABASE_URL = "https://pscwklkpdggrqpehtxpo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_n9WS3oX68N0jeQAt8MlROA_c3aKuXB6";
// =========================================

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const $ = (q)=>document.querySelector(q);
const msg = $("#msg");

let mode = "login"; // login | signup

function setMode(next){
  mode = next;
  $("#authTitle").textContent = mode === "login" ? "Log In" : "Sign Up";
  $("#submitBtn").textContent = mode === "login" ? "Log In" : "Create account";
  $("#authHint").textContent = mode === "login" ? "Don’t have an account?" : "Already have an account?";
  $("#toggleMode").textContent = mode === "login" ? "Sign up" : "Log in";
  msg.textContent = "";
}

$("#toggleMode").addEventListener("click", ()=>{
  setMode(mode === "login" ? "signup" : "login");
});

$("#pwEye").addEventListener("click", ()=>{
  const p = $("#password");
  p.type = (p.type === "password") ? "text" : "password";
});

function show(m){ msg.textContent = m; }

$("#submitBtn").addEventListener("click", async ()=>{
  const email = $("#email").value.trim();
  const password = $("#password").value;

  if(!email || !password){
    show("Enter email + password.");
    return;
  }

  try{
    show("Working...");

    if(mode === "login"){
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if(error) throw error;

      localStorage.setItem("engtest_auth", "1");
      localStorage.setItem("engtest_user_email", email);

      show("Logged in ✅ Redirecting...");
      window.location.href = "index.html";
    }else{
      const { data, error } = await supabase.auth.signUp({ email, password });
      if(error) throw error;

      show("Account created ✅ Now log in.");
      setMode("login");
    }
  }catch(e){
    show(e.message || "Auth error.");
  }
});

$("#googleBtn").addEventListener("click", async ()=>{
  show("Redirecting to Google...");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin + "/index.html" }
  });
  if(error) show(error.message);
});

$("#forgotBtn").addEventListener("click", async ()=>{
  const email = $("#email").value.trim();
  if(!email){ show("Type your email first."); return; }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + "/auth.html"
  });
  if(error) show(error.message);
  else show("Reset email sent ✅");
});
