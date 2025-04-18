const Footer = () => {
   return (
      <footer className="bg-gradient-to-br from-blue-200 to-purple-100 rounded-sm dark:bg-indigo-700 text-black dark:text-white py-6 px-4 text-center">
         <div className="max-w-4xl mx-auto">
            <p className="text-sm">MemoTag&copy; {new Date().getFullYear()}.  All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-4 text-lg">
               <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-200"
               >
                  About
               </a>
               <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-200"
               >
                  Contact
               </a>
               <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-200"
               >
                  Privacy
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
