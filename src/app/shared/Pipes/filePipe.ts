// import { Pipe } from '@angular/core';
// import { Uploadedtype } from 'src/app/property/Models/multiMedia';
// import { document } from 'src/app/property/Models/property';

// @Pipe({
//   name: 'ImageFiles',
// })
// export class ImageFiles {
//   transform(objects: document[]): document[] | null {
//     if (objects) {
//       return objects?.filter(
//         (multimedia) => multimedia.documentType === Uploadedtype.image
//       );
//     }
//     return null;
//   }
// }


// @Pipe({
//     name: 'VideoFiles',
//   })
//   export class VideoFiles {
//     transform(objects: document[]): document[] | null {
//       if (objects) {
//         return objects?.filter(
//           (multimedia) => multimedia.documentType === Uploadedtype.video
//         );
//       }
//       return null;
//     }
//   }
  
// @Pipe({
//     name: 'PdfFiles',
//   })
//   export class PdfFiles {
//     transform(objects: document[]): document[] | null {
//       if (objects) {
//         return objects?.filter(
//           (multimedia) => multimedia.documentType === Uploadedtype.pdf
//         );
//       }
//       return null;
//     }
//   }