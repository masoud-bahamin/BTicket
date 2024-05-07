import SelectedSeat from "@/components/Templates/Bus/SelectSeat";
import { getUserInfo } from "@/utils/authUser";

type seatType = {
  id: number;
  seat: number;
  reserved: boolean;
  isSubmited: boolean;
};

async function BusTicketInfo({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserInfo();

  return (
    <div className="container">
      <SelectedSeat id={id} userId={JSON.parse(JSON.stringify(user._id))} />
    </div>
  );
}

export default BusTicketInfo;
