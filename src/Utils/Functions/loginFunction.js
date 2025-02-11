export const handleLogin = (email, password, setError, login, navigate) => {
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
  
    // Check if the email ends with @gmail.com
    if (!email.endsWith('@gmail.com')) {
      setError("Email must be a Gmail account (@gmail.com)");
      return;
    }
  
    let extractedName = email.split("@")[0];
    extractedName = extractedName.replace(/[^a-zA-Z\s]/g, " ");
    extractedName = extractedName.replace(/\s+/g, " ").trim();
    extractedName = extractedName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  
    localStorage.setItem("username", extractedName);
  
    login(); // Call login function
  
    // After successful login, navigate to the dashboard
    navigate('/dashboard');
  };
  