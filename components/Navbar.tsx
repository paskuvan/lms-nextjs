const Navbar = () => {
  return (
    <nav className="navbar">
    <link href="/">
    <div className="flex items-center gap-2.5 cursor-pointer">
        <Image 
        src="/images/logo.svg" 
        alt="Logo" 
        width={46} 
        height={44} 
        />
    </div>
    <div className="flex items-center gap-8">
        <p>Home</p>
        <p>Companions</p>
        <p>My Journey</p>
        <p>Sign In</p>
    </div>
    </link>    
    </nav>
  )
}

export default Navbar