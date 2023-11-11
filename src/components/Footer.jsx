import React from 'react'

export default function Footer({isDarkMode}) {
  return (
<footer className={`py-4 text-center border-t-2 ${isDarkMode ? "border-orange-500" : "border-black"}`}>
  <p>&copy; {new Date().getFullYear()} Darshan. Made with React Js and Tailwind css</p>
</footer>



  )
}
