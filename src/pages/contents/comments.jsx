export default function Comment({ commentValue }) {
  return (
    <ul>
      {commentValue.map(({ Body }, index) => {
        Body = Body.includes("گپ فیلم") ? Body.replace("گپ فیلم", "نت فیلم") : Body;
        return (
          <li className=" m-3 bg-zinc-900 rounded-md" key={index}>
            <div className="flex items-center gap-2">
              <img
                src="/icons/user.svg"
                alt="profile"
                className="w-10 bg-gray-500  rounded-lg"
              />
              <span>کاربر نت فیلم</span>
            </div>
            <p className="p-3">{Body}</p>
          </li>
        )
      })}
    </ul>
  );
}
