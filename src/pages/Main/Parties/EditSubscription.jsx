import { useParams } from "react-router-dom";
import { useSingleSubscriptionQuery } from "../../../redux/features/subscriptionSlice";


export default function EditSubscription() {
    const {id} = useParams();
    console.log(id, 'id')
    const {data} = useSingleSubscriptionQuery(id);
    console.log(data,'single subscription');
  return (
    <div>
      
    </div>
  )
}
