const Footer = () => {
   return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 px-4 text-center">
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
