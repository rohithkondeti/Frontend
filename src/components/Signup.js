
const SignUp = () => {
    return (
    
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h2>Sign Up</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
          <input type="text" placeholder="Name" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          <input type="email" placeholder="Email" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          <input type="tel" placeholder="Phone Number" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          <input type="text" placeholder="Address" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          <input type="text" placeholder="Username" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          <input type="password" placeholder="Password" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          <input type="password" placeholder="Re-enter Password" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
          
          <button type="submit" style={{ margin: '10px 0', padding: '10px', width: '100%', backgroundColor: 'blue', color: 'white' }}>Sign Up</button>
        </form> 
      </div>
      );
    };
    

    export default SignUp;