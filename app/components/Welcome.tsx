import ImageUploadForm from "./ui/imageUploadForm";
import Typewriter from "./ui/Typewriter";

export default function Welcome(){
    return (
        <div className="text-center bg-gray-100 p-24 px-40 rounded-3xl mt-60">
            <div className='text-4xl font-bold'>
                Welcome to Magic Tools CMS
            </div>
            <div className="text-2xl">
                <Typewriter text="What do you want to do today?" delay={100} />
            </div>

            <div className="mt-20">
                <ImageUploadForm/>
            </div>
        </div>
    );
  }