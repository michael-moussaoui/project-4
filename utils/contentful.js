// import * as contentful from "contentful"

// var client = contentful.createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCES_TOKEN ,
    
//   });

// export async function fetchEntries() {
//   const entries = await client.getEntries()
//   if (entries.items) return entries.items
//   console.log(`Error getting Entries for ${contentType.name}.`)
// }

// export default { fetchEntries }

// import apolloClient from "./apollo-client";

// export async function getAllGallery() {
//     const { data } = await apolloClient.query({

//      queryGetAllGallery : ` {
//         galleryCollection{
//           items{
//             title
//             slug
//             groupeCollection{
//               items{
//                 url
//               }
//             }
//           }
//         }
//       }
//       `
//     })
    
//     return data.postCollection.items.groupeCollection.items
// }

// export default  getAllGallery 