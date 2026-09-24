import Banner from "@/component/Banner";
import PlanCard from "@/component/shared/PlanCard";
import { IPlanType } from "@/types/type";

const getPlansData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog")
  const data = await response.json()
  return data
}


 const HomePage = async()=> {
  const allPlans = await getPlansData()
  return (
    <div>
      <Banner/>
      <div className=" max-w-11/12 mx-auto">
          <div>
            <h2>THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>
          </div>
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-3 space-y-5">
            {
              allPlans.map((plan:IPlanType) => <PlanCard key={plan.id} plan={plan}/>)
            }
          </div>
      </div>
    </div>

  );
}

export default HomePage