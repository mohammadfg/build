import Plyr from "plyr-react"
import "plyr-react/plyr.css"

export default function Player({ info, image }) {
  const { Title, Files } = info;
  const mp4 = Files.filter(({ FileExtension, Quality }) => {
    return FileExtension === "mp4"
  });
  const plyrProps = {
    type: 'video',
    title: Title,
    sources: [
      ...mp4.map(({ Path, Quality }) => ({
        src: Path,
        type: 'video/mp4',
        size: Quality === 5 ? 1080 : Quality === 4 ? 720 : Quality === 3 ? 480 : Quality === 2 ? 360 : 240
      }))
    ],
    poster: image,
  }
  return (
    <div className="sm:w-3/4 w-11/12  mx-auto" onClick={(e) => e.stopPropagation()}>
      <Plyr source={{ ...plyrProps }} options={undefined} />
    </div>
  )
}
