import Link from "next/link";
import { type Posts } from "@/type";

function Card({ item }: { item: Posts }) {
  return (
    <div className="max-w-full m-2 sm:m-0 bg-gray-100 shadow-sm dark:bg-gray-800">
      <div className="p-3">
        <div className="flex mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 10, 2023</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1">,</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">5 min read</p>
        </div>

        <Link className="text-lg" href={`/read/${item.title.toLowerCase().trim().split(" ").join("-")}`}>
          {item.title}
        </Link>

        <div className="relative rounded-lg overflow-hidden" style={{ width: '100%', paddingTop: '32.4%' }}>
          <iframe
            src={`https://player.thetavideoapi.com/video/${item.url}?autoplay=0`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

// import Image from "next/image";
// import Link from "next/link";
// import { type Posts } from "@/type";

// function Card({ item }: { item: Posts }) {
//   return (
//     <div className="max-w-full m-2 sm:m-0 bg-gray-100 shadow-sm dark:bg-gray-800">
//       {/* <Image className="rounded-lg p-3" width={1000} height={324} src={item.image} alt="demo image" /> */}

//       <div className="p-3">
//         <div className="flex mb-3">
//           <p className="text-sm text-gray-500 dark:text-gray-400">Mar 10, 2023</p>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mx-1">,</p>
//           <p className="text-sm text-gray-500 dark:text-gray-400">5 min read</p>
//         </div>

//         <Link className="text-lg" href={`/read/${item.title.toLowerCase().trim().split(" ").join("-")}`}>
//           {item.title}
//         </Link>

//         <div className="rounded-lg p-3" style={{ width: 1000, height: 324 }}>
//           <iframe
//             src={`https://player.thetavideoapi.com/video/${item.url}?autoplay=0`}
//             width="100%"
//             height="100%"
//             allowFullScreen
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Card;
