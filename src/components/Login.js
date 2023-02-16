const Login = () => {
     return (
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
         <form style={{ width: "30%", padding: "2rem", background: "#f2f2f2", borderRadius: "10px" }}>
           <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Login</h1>
           <div style={{ marginBottom: "1rem" }}>
             <label htmlFor="username">Username:</label>
             <input type="text" id="username" name="username" style={{ width: "100%", padding: ".5rem" }} />
           </div>
           <div style={{ marginBottom: "1rem" }}>
             <label htmlFor="password">Password:</label>
             <input type="password" id="password" name="password" style={{ width: "100%", padding: ".5rem" }} />
           </div>
           <button type="submit" style={{ width: "100%", padding: ".5rem", background: "lightblue", border: "none", borderRadius: "5px", color: "#fff" }}>
             Submit
           </button>
         </form>
       </div>
     );
   };

   export default Login;