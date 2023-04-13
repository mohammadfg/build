import { Link } from "react-router-dom";

export default function List({ title, summery, id}) {
  return (
    <li className="mt-3 border-b p-2 border-b-zinc-900">
      <Link to={`/contents/${id}`} className="flex gap-3">
        <img
          loading="lazy"
          className="rounded-md w-36"
          src={
            "https://cdn.tek-nic.com/image/362/panel/" + id + "/portrait.jpg"
          }
          alt="poster"
        />
        <div className="flex-col">
          <p className="text-2xl text-right">{title}</p>
          <p className="h-16 overflow-hidden">{summery}</p>
        </div>
      </Link>
    </li>
  );
}
