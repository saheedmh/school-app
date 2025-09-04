import './style/loginpage.css';
import {Link} from 'react-router-dom';



const  Loginpage = () => {
  
    return ( 
        <div className="login-container">
        
         <form action="" className="login-form">
            <h2>hi, welcome back</h2>
            <label htmlFor='email'>Email</label>
            <input type="text" id='email'/>
            <br/>
            
            <label htmlFor='password' style={{color:"white"}}>password</label>
            <input type="password" name="" id="password" /><br></br>
            <button >login</button><br/>
            <section className='checkbox-section'>         
            <input type="checkbox"  name="" id="checkbox" value='remember me' /> <label id="checkbox-id">Remember me</label> 
            <br/>
            <Link style={{color:"white"}}>forget password</Link>
            </section>
   
            
          <span style={{color:"white"}} className='span-element'>or With</span><br /><br /><br />

          <button id='btn-id' >login with facebook</button><br></br><br />
          <button id='btn-id'>login with google</button><br></br>
          <p style={{color:"white"}}>Don't have  an account?       
          <spa><Link to="signpage" className='links'>
          sign</Link></spa> </p> 

         </form>   
        </div>
     );
}
 
export default Loginpage ;