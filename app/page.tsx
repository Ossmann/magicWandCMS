import Navbar from './components/Topbar/Topbar';
import MobileNav from './components/Topbar/MobileNav';
import PDFUpload from './components/ui/upload_pdf_field';
import Welcome from './components/Welcome';

export default async function Home() {

  return (
    <div className='relative h-screen justify-center items-center flex flex-col'>
      
      <div className='hidden sm:mb-200 md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='block md:hidden fixed top-0 left-0 right-0 z-20'>
        <MobileNav />
      </div>

      <div className='mt-40'>
        <Welcome />
      </div>

      <div className='mt-40 w-1/3 text-center mx-auto'>
        <PDFUpload />
      </div>


  
      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>
  );
}
