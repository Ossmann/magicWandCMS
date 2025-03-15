import Link from 'next/link';
import { createImageProfile } from '@/app/lib/actions';

export default function ImageUploadForm(){
    return (
      <form action={createImageProfile}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6 text-black">
          {/*  Discipline */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              RDS Upload Test
            </label>
            <div className="relative">
              <input type="text" id="id" name="id" />
              <input type="text" id="file_name" name="file_name" />
              <input type="text" id="s3_url" name="s3_url" />
            </div>
          </div>
      </div>
          

        <div className="mt-6 flex justify-end gap-4 pr-20">
          <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
            <button
              type="submit"
              className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              Submit
            </button>
        </div>
      </form>
    );
  }

