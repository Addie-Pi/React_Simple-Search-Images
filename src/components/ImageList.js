import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  // normal way
  // const images = props.images.map((image) => {
  // return (
  //   <img key={image.id} src={image.urls.regular} alt={image.description} />
  // )

  // destructure way
  const images = props.images.map((image) => {
    // functioanl component
    // return <ImageCard image={image} />

    // class component
    return <ImageCard key={image.id} image={image} />
  })

  return <div className="image-list">{images}</div>
}

export default ImageList
