import { useRef, useEffect } from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import Hls from "hls.js";
export default function Player({ info, image }) {
  const { Title, Files } = info;
  const movies = Files.filter(({ FileExtension, Quality }) => (FileExtension === "m3u8" || FileExtension === "mp4"));

  const ref = useRef(null);
  useEffect(() => {
    if (movies.every(({ FileExtension }) => FileExtension === "m3u8")) {
      const loadVideo = async () => {
        const video = document.getElementsByTagName("video")[0];
        var hls = new Hls();
        hls.loadSource(movies[0].Path);
        hls.attachMedia(video);
        ref.current.plyr.media = video;

        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          (ref.current.plyr).play();
        });
      };
      loadVideo();
    }
  });



  const plyrProps = {
    type: 'video',
    title: Title,
    sources: [
      ...movies.map(({ Path, Quality, FileExtension }) => ({
        src: Path,
        type: FileExtension === "mp4" ? 'video/mp4' : FileExtension === "m3u8" && "application/x-mpegURL",
        size: Quality === 5 ? 1080 : Quality === 4 ? 720 : Quality === 3 ? 480 : Quality === 2 ? 360 : 240
      }))
    ],
    poster: image,
  }
  //
  return (
    <div className="sm:w-3/4 w-11/12  mx-auto" onClick={(e) => e.stopPropagation()}>
      <Plyr source={{ ...plyrProps }} id="plyr" ref={ref} />
    </div>
  )
}
