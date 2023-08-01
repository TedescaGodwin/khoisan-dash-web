
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./../styles/index.css";
import "./../styles/tailwind.css";

export default function AuthLayout({children}) {
    return (
      <div className="relative w-full h-full py-40 min-h-screen">
      <div
        className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
      ></div>
        {children}
      </div>
)
}