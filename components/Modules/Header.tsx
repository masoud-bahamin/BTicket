import { getUserInfo } from "@/utils/authUser";
import Link from "next/link";
import Colors from "./ShowColors";
import Navbar from "./Navbar";

async function Header() {
  const user = await getUserInfo();

  return (
    <>
      <Colors />
      <div className="bg-main-bg">
        <div className="container flex justify-between items-center py-5">
          <div>
            <Link
              href={"/"}
              className="font-bold text-2xl lg:text-3xl font-Poetsen-One text-primary"
            >
              B TICKET
            </Link>
          </div>
          {/* <Navbar email={user?.email} /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
