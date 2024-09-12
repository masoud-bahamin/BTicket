import SelectedSeat from "@/components/Templates/Bus/SelectSeat";
import { getUserInfo } from "@/utils/authUser";
import { redirect } from "next/navigation";

type params = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: params) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/reserved/${id}`);
  const data = await res.json();
  return {
    title: data.ticketInfo.from + " to " + data.ticketInfo.to,
    description:
      data.ticketInfo.from +
      " to " +
      data.ticketInfo.to +
      " its a track to jurney",
  };
}

async function BusTicketInfo({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserInfo();


  if (!user) {
     redirect("/signin");
  };

  return (
    <div className="container">
      <SelectedSeat id={id}  />
    </div>
  );
}

export default BusTicketInfo;
