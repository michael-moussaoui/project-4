import GridGallery from "../components/grid-gallery"

export default function Gallery(){
    const images = [
        "/camera.jpg",
        "/camera.jpg",
        "/camera.jpg",
        "/camera.jpg",
        "/camera.jpg",
        "/camera.jpg",
    ]

return (

<GridGallery images={images} />
 )
}